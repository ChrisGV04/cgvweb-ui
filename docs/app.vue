<script setup lang="ts">
const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#18181b" : "white"
);

useHead({
  titleTemplate: (title) =>
    title && title.includes("CGV WEB UI") ? title : `${title} - CGV WEB UI`,
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", type: "image/svg+xml", href: "/icon.svg" }],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <div>Welcome</div>
</template>
