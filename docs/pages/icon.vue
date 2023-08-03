<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Icons</h1>
    <p class="demo-page-description">
      Basic component to render Iconify icons. You must install the
      <code class="whitespace-nowrap rounded bg-gray-200 p-1 text-gray-900"
        >@iconify-json/{collection-name}</code
      >
      packages for the icons you want and add them to the config.
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
  </UiContainer>
</template>
