<script setup lang="ts">
import { UiButton, UiContainer } from "#components";
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Button</h1>
    <p class="demo-page-description">Basic action button.</p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Primary</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton label="Solid" />
        <UiButton label="Soft" variant="primary-soft" />
        <UiButton label="Ghost" variant="primary-ghost" />
        <UiButton label="Link" variant="primary-link" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">White</span>

      <div class="mt-2 flex items-center p-4 bg-gray-900 rounded-md gap-4">
        <UiButton label="Solid" variant="white-solid" />
        <UiButton label="Soft" variant="white-soft" />
        <UiButton label="Ghost" variant="white-ghost" />
        <UiButton label="Link" variant="white-link" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Black</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton label="Solid" variant="black-solid" />
        <UiButton label="Soft" variant="black-soft" />
        <UiButton label="Ghost" variant="black-ghost" />
        <UiButton label="Link" variant="black-link" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">With icons</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton
          label="Leading"
          leading-icon="i-heroicons-lock-closed-20-solid"
        />
        <UiButton
          label="Trailing"
          variant="white-solid"
          leading-icon="i-heroicons-lock-closed-20-solid"
        />
        <UiButton loading variant="black-solid" label="Loading" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Disabled</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton disabled label="Primary" />
        <UiButton disabled label="White" variant="white-solid" />
        <UiButton disabled label="Black" variant="black-solid" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Sizes</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton label="X-Small" size="xs" />
        <UiButton label="Small" />
        <UiButton label="Medium" size="md" />
      </div>
    </div>

    <div class="demo-category-container items-start mt-4">
      <span class="demo-category-title">As link</span>

      <UiButton
        class="mt-2"
        target="_blank"
        label="Go to CGV WEB"
        to="https://cgvweb.com"
        trailing-icon="i-heroicons-arrow-top-right-on-square-20-solid"
      />
    </div>
  </UiContainer>
</template>
