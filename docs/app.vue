<script setup lang="ts">
import { TheHeader, NuxtPage } from "#components";
</script>

<template>
  <div>
    <TheHeader />
    <NuxtPage />
  </div>
</template>

<style>
.demo-page-title {
  @apply text-2xl text-gray-900;
}

.demo-page-description {
  @apply text-gray-600;
}

.demo-category-container {
  @apply flex flex-col;
}

.demo-category-title {
  @apply text-sm font-medium text-gray-600;
}

.demo-code-line {
  @apply whitespace-nowrap rounded bg-gray-200 p-1 text-gray-900
}
</style>
