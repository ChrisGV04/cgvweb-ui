# CGV WEB UI

A set of reusable components for Nuxt 3 heavily inspired by [`@nuxthq/ui`](https://ui.nuxtlabs.com/getting-started). These components are developed by [Christian Gil](https://cgvweb.com/en) to be used at my own freelance projects. It provides the building blocks for the most common components I end up using.

## Features

- Built with [Headless UI](https://headlessui.com/) and [Tailwind CSS](https://tailwindcss.com/).
- HMR support through Nuxt App Config
- Dark mode support
- Bundled icons
- Fully typed

## Installation

```bash
pnpm install -D @cgv.web/ui
```

Then, register the module in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["@cgv.web/ui"],
});
```
