import pkg from "../package.json";
import module from "../src/module";

export default defineNuxtConfig({
  modules: ["@nuxt/devtools", module, "@vueuse/nuxt"],

  app: {
    head: {
      titleTemplate: (title) =>
        title && title.includes("CGV WEB UI") ? title : `${title} - CGV WEB UI`,
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/icon.svg" }],
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  ui: {
    global: true,
    icons: ["heroicons"],
  },

  typescript: {
    strict: false,
    includeWorkspace: true,
  },
});
