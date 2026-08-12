// Builds this TanStack Start app to fully static HTML for GitHub Pages.
//
// The app has no server functions / API routes (see AGENTS.md — landing page
// only), so instead of relying on Nitro's "static"/"github-pages" presets —
// whose built-in prerender crawler currently 404s on this Nitro/Vite beta
// combo — we build the normal "node-server" SSR bundle, boot it once, fetch
// "/" from it, and write the rendered HTML as static index.html/404.html
// next to the client assets. Delete this workaround once the upstream
// prerender crawler is fixed and switch to `nitro: { preset: "github-pages" }`.
import { spawn, spawnSync } from "node:child_process";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), ".output", "public");
const port = 4174 + Math.floor(Math.random() * 1000);

console.log("[export-static] Building node-server SSR bundle...");
const build = spawnSync(process.execPath, [path.join("node_modules", "vite", "bin", "vite.js"), "build"], {
  env: { ...process.env, NITRO_PRESET: "node-server" },
  stdio: "inherit",
  shell: false,
});
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

try {
  await waitForServer();
  const res = await fetch(`http://localhost:${port}/`);
  if (!res.ok) {
    throw new Error(`SSR capture of "/" returned HTTP ${res.status}`);
  }
  const html = await res.text();
  await writeFile(path.join(outDir, "index.html"), html, "utf8");
  await writeFile(path.join(outDir, "404.html"), html, "utf8");
  console.log(`[export-static] Wrote index.html and 404.html to ${outDir}`);
} finally {
  server.kill();
}
