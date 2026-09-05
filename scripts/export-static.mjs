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
// Routes are derived from src/routes so a new page is prerendered
// automatically — no need to maintain a list here.
import { spawn, spawnSync } from "node:child_process";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), ".output", "public");
const routesDir = path.join(process.cwd(), "src", "routes");
const port = 4174 + Math.floor(Math.random() * 1000);

/** Derive the route table from the file-based routes directory. */
async function discoverRoutes() {
  const entries = await readdir(routesDir, { withFileTypes: true });
  const routes = [];
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const { name } = entry;
    if (!name.endsWith(".tsx")) continue;
    if (name.startsWith("__")) continue; // __root.tsx
    const base = name.slice(0, -4);
    routes.push(base === "index" ? "/" : `/${base}`);
  }
  return routes.sort((a, b) => a.localeCompare(b));
}

console.log("[export-static] Building node-server SSR bundle...");
const build = spawnSync(process.execPath, [path.join("node_modules", "vite", "bin", "vite.js"), "build"], {
  env: { ...process.env, NITRO_PRESET: "node-server" },
  stdio: "inherit",
  shell: false,
});
if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const routes = await discoverRoutes();
console.log(`[export-static] Prerendering ${routes.length} routes: ${routes.join(", ")}`);

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

  for (const route of routes) {
    const res = await fetch(`http://localhost:${port}${route}`);
    if (!res.ok) {
      throw new Error(`SSR capture of "${route}" returned HTTP ${res.status}`);
    }
    const html = await res.text();
    const written = await writeRoute(route, html);
    console.log(`[export-static]   ${route} -> ${written}`);
  }

  // Real 404 page: render a path that matches no route so the router's
  // notFoundComponent is what gets captured, not the homepage.
  const notFound = await fetch(`http://localhost:${port}/__not-found__`);
  const notFoundHtml = await notFound.text();
  await writeFile(path.join(outDir, "404.html"), notFoundHtml, "utf8");
  console.log("[export-static]   404.html");

  console.log(`[export-static] Wrote ${routes.length} routes + 404.html to ${outDir}`);
} finally {
  server.kill();
}
