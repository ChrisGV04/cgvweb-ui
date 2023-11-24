<script setup lang="ts">
import { UiContainer, UiIcon } from "#components";
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Icons</h1>
    <p class="demo-page-description">
      Basic component to render Iconify icons. You must install the
      <code class="demo-code-line">@iconify-json/{collection-name}</code>
      packages for the icons you want and add them to the config, since they
      will get bundled.
    </p>

    <div class="mt-4 demo-category-container">
      <span class="demo-category-title">Examples</span>

      <div class="mt-2 flex items-center gap-5 text-gray-700">
        <UiIcon name="i-heroicons-bell" class="h-8 w-8" />
        <UiIcon name="i-heroicons-beaker-solid" class="h-8 w-8" />
        <UiIcon name="i-heroicons-battery-100" class="h-8 w-8" />
        <UiIcon name="i-heroicons-document-check-20-solid" class="h-8 w-8" />
      </div>
    </div>

    <h2 class="demo-page-title mt-10">Dynamic icons</h2>
    <p class="demo-page-description">
      If you require dynamic icons, pass the
      <code class="demo-code-line">dynamic</code> prop and it will switch to
      icons from <code class="demo-code-line">nuxt-icon</code> and fetch them at
      runtime.
    </p>

    <div class="mt-4 demo-category-container">
      <span class="demo-category-title">Dynamic icons</span>

      <div class="mt-2 flex items-center gap-5 text-gray-700">
        <UiIcon dynamic name="i-ph-airplane" class="h-8 w-8" />
        <UiIcon dynamic name="i-tabler-anchor" class="h-8 w-8" />
        <UiIcon dynamic name="i-bxl-instagram" class="h-8 w-8" />
        <UiIcon dynamic name="i-bxl-twitter" class="h-8 w-8" />
      </div>
    </div>
  </UiContainer>
</template>
