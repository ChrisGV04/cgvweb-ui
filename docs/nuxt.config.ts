import pkg from "../package.json";

export default defineNuxtConfig({
  modules: ["../src/module", "@vueuse/nuxt"],
  devtools: { enabled: true },

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
});
