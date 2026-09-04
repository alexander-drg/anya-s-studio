// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build: `GITHUB_PAGES=true bun run build`.
// Produces a fully prerendered, static site served from /anya-s-studio/.
// Lovable preview/deploy and `bun run dev` are unaffected.
const isGithubPages = process.env["GITHUB_PAGES"] === "true";
const base = process.env["BASE_PATH"] ?? "/anya-s-studio/";

const staticPages = [
  { path: "/" },
  { path: "/despre" },
  { path: "/desen-fractal" },
  { path: "/terapie-craniosacrala" },
  { path: "/galerie" },
  { path: "/contact" },
];

export default defineConfig({
  ...(isGithubPages ? { vite: { base } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGithubPages
      ? {
          pages: staticPages,
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        }
      : {}),
  },
});
