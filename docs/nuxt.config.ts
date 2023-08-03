import colors from "tailwindcss/colors";
import pkg from "../package.json";
import { excludeColors } from "../src/colors";
import module from "../src/module";

export default defineNuxtConfig({
  modules: ["@nuxt/devtools", module, "@vueuse/nuxt"],

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  ui: {
    global: true,
    icons: ["heroicons"],
    safelistColors: excludeColors(colors),
  },

  typescript: {
    strict: false,
    includeWorkspace: true,
  },
});
