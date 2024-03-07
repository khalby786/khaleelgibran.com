import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), svelte(), tailwind()],
  vite: {}
});