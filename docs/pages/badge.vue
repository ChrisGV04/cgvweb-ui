<script setup lang="ts">
import { UiBadge, UiContainer } from "#components";
</script>

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
        <UiBadge variant="red">Badge</UiBadge>
        <UiBadge variant="yellow">Badge</UiBadge>
        <UiBadge variant="green">Badge</UiBadge>
        <UiBadge variant="blue">Badge</UiBadge>
        <UiBadge variant="indigo">Badge</UiBadge>
        <UiBadge variant="purple">Badge</UiBadge>
        <UiBadge variant="pink">Badge</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Solid</span>

      <div class="mt-2 flex items-center gap-4">
        <UiBadge variant="gray-solid">Badge</UiBadge>
        <UiBadge variant="red-solid">Badge</UiBadge>
        <UiBadge variant="yellow-solid">Badge</UiBadge>
        <UiBadge variant="green-solid">Badge</UiBadge>
        <UiBadge variant="blue-solid">Badge</UiBadge>
        <UiBadge variant="indigo-solid">Badge</UiBadge>
        <UiBadge variant="purple-solid">Badge</UiBadge>
        <UiBadge variant="pink-solid">Badge</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Dot</span>

      <div class="mt-2 flex items-center gap-4">
        <UiBadge dot variant="gray">Badge</UiBadge>
        <UiBadge dot variant="red">Badge</UiBadge>
        <UiBadge dot variant="yellow">Badge</UiBadge>
        <UiBadge dot variant="green">Badge</UiBadge>
        <UiBadge dot variant="blue">Badge</UiBadge>
        <UiBadge dot variant="indigo">Badge</UiBadge>
        <UiBadge dot variant="purple">Badge</UiBadge>
        <UiBadge dot variant="pink">Badge</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Small</span>

      <div class="mt-2 flex items-center gap-4">
        <UiBadge size="xs" dot variant="gray">Badge</UiBadge>
        <UiBadge size="xs" dot variant="red">Badge</UiBadge>
        <UiBadge size="xs" dot variant="yellow">Badge</UiBadge>
        <UiBadge size="xs" dot variant="green">Badge</UiBadge>
        <UiBadge size="xs" dot variant="blue">Badge</UiBadge>
        <UiBadge size="xs" dot variant="indigo">Badge</UiBadge>
        <UiBadge size="xs" dot variant="purple">Badge</UiBadge>
        <UiBadge size="xs" dot variant="pink">Badge</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">With action</span>

      <div class="mt-2 flex items-center gap-4">
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" variant="gray"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" variant="red"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" variant="yellow"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" variant="green"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" variant="blue"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" variant="indigo"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" variant="purple"
          >Badge</UiBadge
        >
        <UiBadge action-icon="i-heroicons-x-mark-20-solid" variant="pink"
          >Badge</UiBadge
        >
      </div>
    </div>
  </UiContainer>
</template>
