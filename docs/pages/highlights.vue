<script setup lang="ts">
const demoText =
  "Text with [highlighted] words as an example of a [functional component].";
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Highlights</h1>
    <p class="demo-page-description">
      Funcional component used to highlight certain parts of a given text.
    </p>

    <div
      class="border-primary-500 mt-4 demo-category-container border-l-2 pl-4"
    >
      <span class="demo-category-title">Raw input:</span>
      <p>{{ demoText }}</p>
    </div>

    <div
      class="border-primary-500 mt-4 demo-category-container border-l-2 pl-4"
    >
      <span class="demo-category-title">With highlights:</span>

      <UiHighlightText :text="demoText">
        <template #highlights="{ content }">
          <span class="text-primary-500 uppercase">{{ content }}</span>
        </template>
      </UiHighlightText>
    </div>
  </UiContainer>
</template>
