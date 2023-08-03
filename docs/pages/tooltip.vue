<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Tooltip</h1>
    <p class="demo-page-description">Show additional information on hover.</p>

    <div class="demo-category-container mt-4 items-start">
      <span class="demo-category-title">Default</span>
      <UiTooltip text="I am a tooltip!">Hover me</UiTooltip>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Placement</span>

      <div class="grid grid-cols-4 place-items-start gap-5">
        <UiTooltip text="I am a tooltip!" placement="top">On the top</UiTooltip>
        <UiTooltip text="I am a tooltip!" placement="bottom"
          >On the bottom</UiTooltip
        >
        <UiTooltip text="I am a tooltip!" placement="left"
          >On the left</UiTooltip
        >
        <UiTooltip text="I am a tooltip!" placement="right"
          >On the right</UiTooltip
        >
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Scroll responsive</span>

      <div
        class="mt-1 flex flex-nowrap dark:bg-gray-700 dark:border-white/10 items-center gap-5 overflow-x-auto rounded-md border border-gray-900/10 bg-gray-100 p-2 will-change-transform"
      >
        <div
          class="h-20 w-[30vw] flex-shrink-0 rounded bg-gray-300 dark:bg-gray-500"
        />

        <UiTooltip text="I am a tooltip!" class="flex-shrink-0" placement="left"
          >Hover me</UiTooltip
        >

        <div
          class="h-20 w-[50vw] flex-shrink-0 rounded bg-gray-300 dark:bg-gray-500"
        />
      </div>
    </div>

    <div class="demo-category-container mt-4 items-start">
      <span class="demo-category-title">Custom text</span>
      <UiTooltip>
        Hover me

        <template #text>This is a tooltip with <i>custom text</i>.</template>
      </UiTooltip>
    </div>

    <div class="demo-category-container mt-4 items-start">
      <span class="demo-category-title">Custom tooltip</span>

      <UiTooltip placement="right">
        Hover me

        <template #tooltip>
          <div
            class="flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-gray-700 shadow-sm ring-1 ring-black/5"
          >
            <UiIcon
              name="i-heroicons-question-mark-circle-20-solid"
              class="text-gray-500"
            />
            This is a completely <strong>custom tooltip.</strong>
          </div>
        </template>
      </UiTooltip>
    </div>
  </UiContainer>
</template>
