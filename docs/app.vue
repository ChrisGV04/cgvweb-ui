<script setup lang="ts">
import { NuxtPage, TheHeader } from '#components';
</script>

<template>
  <div>
    <TheHeader />
    <NuxtPage />

    <Body class="selection:bg-primary-200/60 selection:text-primary-800 antialiased" />
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
  @apply whitespace-nowrap rounded bg-gray-200 p-1 text-gray-900;
}
</style>
