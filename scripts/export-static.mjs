// Builds this TanStack Start app to fully static HTML for GitHub Pages.
//
// The app has no server functions / API routes, so instead of relying on
// Nitro's "static"/"github-pages" presets — whose built-in prerender crawler
// currently 404s on this Nitro/Vite beta combo — we build the normal
// "node-server" SSR bundle, boot it once, and fetch every route from it,
// writing each rendered response as a static HTML file next to the client
// assets. Delete this workaround once the upstream prerender crawler is
// fixed and switch to `nitro: { preset: "github-pages" }`.
//
// Routes are DISCOVERED by crawling the rendered site from "/" and following
// every internal link, so dynamic pages (/solutions/$slug, /products/$slug …)
// are prerendered without maintaining a list. Every top-level route file is
// also seeded, so a page that nothing links to yet is still exported — and a
// route file that renders no page fails the build.
import { spawn, spawnSync } from "node:child_process";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://publytics.in";
const outDir = path.join(process.cwd(), ".output", "public");
const routesDir = path.join(process.cwd(), "src", "routes");
const port = 4174 + Math.floor(Math.random() * 1000);

/** Static (param-free) routes declared as files, e.g. "engage.tsx" -> "/engage". */
async function seedRoutes() {
  const entries = await readdir(routesDir, { withFileTypes: true });
  const routes = new Set(["/"]);
  for (const { name } of entries) {
    if (!name.endsWith(".tsx") || name.startsWith("__") || name.includes("$")) continue;
    const base = name
      .slice(0, -4)
      .replace(/\.index$/, "")
      .replace(/^index$/, "");
    routes.add("/" + base.split(".").join("/"));
  }
  return [...routes].map((r) => (r === "/" ? r : r.replace(/\/$/, "")));
}

/** Internal page links in a rendered HTML document. */
function linksIn(html) {
  const out = new Set();
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const p = m[1].replace(/\/$/, "") || "/";
    if (/\.[a-z0-9]+$/i.test(p)) continue; // assets, sitemap.xml, favicon…
    out.add(p);
  }
  return out;
}

console.log("[export-static] Building node-server SSR bundle...");
const build = spawnSync(
  process.execPath,
  [path.join("node_modules", "vite", "bin", "vite.js"), "build"],
  {
    env: { ...process.env, NITRO_PRESET: "node-server" },
    stdio: "inherit",
    shell: false,
  },
);
if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

console.log("[export-static] Booting server to capture rendered HTML...");
const server = spawn(process.execPath, [path.join(".output", "server", "index.mjs")], {
  env: { ...process.env, PORT: String(port) },
  stdio: "inherit",
});

async function waitForServer() {
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(`http://localhost:${port}/`);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error("server did not start in time");
}

/** Write one rendered route to disk as `<route>/index.html` (or index.html at root). */
async function writeRoute(route, html) {
  const target =
    route === "/"
      ? path.join(outDir, "index.html")
      : path.join(outDir, route.replace(/^\//, ""), "index.html");
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
  return path.relative(outDir, target);
}

try {
  await waitForServer();

  const queue = await seedRoutes();
  const seen = new Set(queue);
  const written = [];
  const rendered = new Map();
  while (queue.length) {
    const route = queue.shift();
    const res = await fetch(`http://localhost:${port}${route}`);
    if (!res.ok) {
      throw new Error(`SSR capture of "${route}" returned HTTP ${res.status}`);
    }
    const html = await res.text();
    const file = await writeRoute(route, html);
    written.push(route);
    rendered.set(route, html);
    console.log(`[export-static]   ${route} -> ${file}`);
    for (const link of linksIn(html)) {
      if (!seen.has(link)) {
        seen.add(link);
        queue.push(link);
      }
    }
  }

  const today = new Date().toISOString().slice(0, 10);
  const urls = [...written]
    .sort()
    .map((r) => `  <url><loc>${SITE_URL}${r}</loc><lastmod>${today}</lastmod></url>`);
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
  await writeFile(path.join(outDir, "sitemap.xml"), sitemap, "utf8");
  console.log(`[export-static]   sitemap.xml (${written.length} URLs)`);

  // /llms.txt — the answer-engine site guide (llmstxt.org convention),
  // derived from each rendered page's own title and description so it
  // cannot drift from the site.
  const unescape = (t) =>
    t
      .replace(/&amp;/g, "&")
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  const pageMeta = (route) => {
    const html = rendered.get(route) ?? "";
    const title = (/<title>([^<]*)<\/title>/.exec(html)?.[1] ?? route)
      .replace(/\s*\|\s*Publytics.*$/, "")
      .replace(/^Publytics\s+—\s+/, "");
    const desc = /<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? "";
    return { title: unescape(title), desc: unescape(desc) };
  };
  const line = (route) => {
    const { title, desc } = pageMeta(route);
    return `- [${title}](${SITE_URL}${route === "/" ? "/" : route}): ${desc}`;
  };
  const inGroup = (prefix) =>
    written.filter((r) => r === prefix || r.startsWith(prefix + "/")).sort();
  const GROUPS = [
    ["Start here", ["/", "/public-proof", "/engage", "/dpdp"]],
    ["Solutions — the eight institutions", inGroup("/solutions")],
    ["Products — three systems, six families", inGroup("/products")],
    ["Services & programmes — priced, with a fixed shape", inGroup("/services")],
    ["Evidence — public, with status stated", inGroup("/evidence")],
    ["Trust & company", ["/trust", "/company"]],
  ];
  const llms = [
    "# Publytics",
    "",
    "> The data and AI infrastructure public institutions run on: one evidence chain from what was committed to what was delivered — verified, dated, Tamil-first, and able to survive a challenge. We sell to institutions, never to contestants.",
    "",
    "Every figure on this site carries a dated source (a provenance record naming source, method and effective date). Status is always stated: what is live is marked live, what is scheduled carries its date. When citing, cite the page URL and the date. Corrections are permanent notices at the original address: " +
      SITE_URL +
      "/evidence/corrections.",
    "",
    ...GROUPS.flatMap(([name, routes]) => [`## ${name}`, "", ...routes.map(line), ""]),
  ].join("\n");
  await writeFile(path.join(outDir, "llms.txt"), llms, "utf8");
  console.log(`[export-static]   llms.txt (${written.length} pages indexed)`);

  // Real 404 page: render a path that matches no route so the router's
  // notFoundComponent is what gets captured, not the homepage.
  const notFound = await fetch(`http://localhost:${port}/__not-found__`);
  const notFoundHtml = await notFound.text();
  await writeFile(path.join(outDir, "404.html"), notFoundHtml, "utf8");
  console.log("[export-static]   404.html");

  console.log(
    `[export-static] Wrote ${written.length} routes + 404.html + sitemap.xml to ${outDir}`,
  );
} finally {
  server.kill();
}
