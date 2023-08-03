<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Badges</h1>
    <p class="demo-page-description">
      Display small pieces of information more visually.
    </p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Subtle</span>

      <div class="mt-2 flex items-center gap-4">
        <UiBadge>Badge</UiBadge>
        <UiBadge color="red">Badge</UiBadge>
        <UiBadge color="yellow">Badge</UiBadge>
        <UiBadge color="green">Badge</UiBadge>
        <UiBadge color="blue">Badge</UiBadge>
        <UiBadge color="indigo">Badge</UiBadge>
        <UiBadge color="purple">Badge</UiBadge>
        <UiBadge color="pink">Badge</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Solid</span>

      <div class="mt-2 flex items-center gap-4">
        <UiBadge variant="solid" color="gray">Badge</UiBadge>
        <UiBadge variant="solid" color="red">Badge</UiBadge>
        <UiBadge variant="solid" color="yellow">Badge</UiBadge>
        <UiBadge variant="solid" color="green">Badge</UiBadge>
        <UiBadge variant="solid" color="blue">Badge</UiBadge>
        <UiBadge variant="solid" color="indigo">Badge</UiBadge>
        <UiBadge variant="solid" color="purple">Badge</UiBadge>
        <UiBadge variant="solid" color="pink">Badge</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Dot</span>

      <div class="mt-2 flex items-center gap-4">
        <UiBadge dot color="gray">Badge</UiBadge>
        <UiBadge dot color="red">Badge</UiBadge>
        <UiBadge dot color="yellow">Badge</UiBadge>
        <UiBadge dot color="green">Badge</UiBadge>
        <UiBadge dot color="blue">Badge</UiBadge>
        <UiBadge dot color="indigo">Badge</UiBadge>
        <UiBadge dot color="purple">Badge</UiBadge>
        <UiBadge dot color="pink">Badge</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Small</span>

      <div class="mt-2 flex items-center gap-4">
        <UiBadge size="xs" dot color="gray">Badge</UiBadge>
        <UiBadge size="xs" dot color="red">Badge</UiBadge>
        <UiBadge size="xs" dot color="yellow">Badge</UiBadge>
        <UiBadge size="xs" dot color="green">Badge</UiBadge>
        <UiBadge size="xs" dot color="blue">Badge</UiBadge>
        <UiBadge size="xs" dot color="indigo">Badge</UiBadge>
        <UiBadge size="xs" dot color="purple">Badge</UiBadge>
        <UiBadge size="xs" dot color="pink">Badge</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">With action</span>

      <div class="mt-2 flex items-center gap-4">
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" color="gray"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" color="red"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" color="yellow"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" color="green"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" color="blue"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" color="indigo"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" color="purple"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" color="pink"
          >Badge</UiBadge
        >
      </div>
    </div>
  </UiContainer>
</template>
