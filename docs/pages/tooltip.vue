<script setup lang="ts">
import { UiContainer, UiTooltip } from '#components';
import { ref } from 'vue';

const scrollableRef = ref<HTMLElement | null>(null);
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Tooltip</h1>
    <p class="demo-page-description">Show additional information on hover.</p>

    <div class="demo-category-container mt-4 items-start">
      <span class="demo-category-title">Default</span>

      <UiTooltip content="I am a tooltip!">
        <UiButton label="Hover me" />
      </UiTooltip>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Placement</span>

      <div class="mt-1 flex gap-5">
        <UiTooltip
          side="top"
          align="end"
          content="Hello! I'm a tooltip with alignment set to 'end' which makes me align to the right"
        >
          <UiButton label="Top right" right-icon="i-heroicons-chevron-up-16-solid" />
        </UiTooltip>

        <UiTooltip side="right" content="Hello! I'm a tooltip">
          <UiButton label="Right center" right-icon="i-heroicons-chevron-right-16-solid" />
        </UiTooltip>

        <UiTooltip side="bottom" align="start" content="Hello! I'm a tooltip">
          <UiButton label="Bottom left" right-icon="i-heroicons-chevron-down-16-solid" />
        </UiTooltip>

        <UiTooltip side="left" content="Hello! I'm a tooltip">
          <UiButton label="Left center" right-icon="i-heroicons-chevron-left-16-solid" />
        </UiTooltip>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Custom collision boundary</span>

      <div
        ref="scrollableRef"
        class="mt-1 flex flex-nowrap items-center gap-5 overflow-x-auto rounded-md border border-gray-900/10 bg-gray-100 p-2 will-change-transform"
      >
        <div class="h-20 w-[30vw] flex-shrink-0 rounded bg-gray-300" />

        <UiTooltip content="I am a tooltip!" side="right" :collision-boundary="scrollableRef">
          <UiButton label="Hover me" />
        </UiTooltip>

        <div class="h-20 w-[50vw] flex-shrink-0 rounded bg-gray-300" />
      </div>
    </div>

    <div class="demo-category-container mt-4 items-start">
      <span class="demo-category-title">Custom text</span>
      <UiTooltip>
        <UiButton label="Hover me" class="mt-2" />

        <template #content="{ classes }">
          <div :class="classes">This is a tooltip with <i>custom text</i>.</div>
        </template>
      </UiTooltip>
    </div>
  </UiContainer>
</template>
