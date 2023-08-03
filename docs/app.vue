<script setup lang="ts">
const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#18181b" : "white"
);

useHead({
  meta: [{ key: "theme-color", name: "theme-color", content: color }],
});
</script>

<template>
  <div>
    <Body class="dark:bg-gray-900" />

    <TheHeader />
    <NuxtPage />
  </div>
</template>

<style>
.demo-page-title {
  @apply text-2xl text-gray-900 dark:text-white;
}

.demo-page-description {
  @apply text-gray-600 dark:text-gray-400;
}

.demo-category-container {
  @apply flex flex-col;
}

.demo-category-title {
  @apply text-sm font-medium text-gray-600 dark:text-gray-400;
}
</style>
