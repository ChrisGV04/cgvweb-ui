# CGV WEB UI

A set of reusable components for Nuxt 3 heavily inspired by [`@nuxt/ui`](https://ui.nuxt.com) and [`shadcn-vue`](https://www.shadcn-vue.com).

These components are developed by [Christian Gil](https://cgvweb.com) mainly to be used at my own freelance projects. It provides the building blocks for the most common components I end up using.

## Features

- Built with [Radix Vue](https://www.radix-vue.com) and [Tailwind CSS](https://tailwindcss.com).
- HMR support through Nuxt App Config
- Bundled icons
- Fully typed

## Installation

```bash
pnpm install -D @cgvweb/ui
```

Then, register the module in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@cgvweb/ui'],
});
```
