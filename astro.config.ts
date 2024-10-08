import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), image(), compress()],
    vite: {
        plugins: [visualizer()],
        resolve: {
            alias: {
                "date-fns/locale": "date-fns/locale/index.js",
            },
        },
    },
    redirects: {
        "/pdf": "/",
    },
    experimental: {
        redirects: true,
    },
    output: "server",
    adapter: vercel({
        analytics: true,
    }),
});
