import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    prerender: { crawlLinks: true },
    preset: "cloudflare_pages",
    cloudflare: {
      deployConfig: true,
      wrangler: { name: "mom-social-media-links" },
    },
    compressPublicAssets: true,
  },
});
