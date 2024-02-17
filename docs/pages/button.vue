<script setup lang="ts">
import { UiButton, UiContainer } from '#components';

function onClick() {
  alert('A button was clicked');
}
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Button</h1>
    <p class="demo-page-description">Basic action button.</p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Primary</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton label="Solid" @click="onClick" />
        <UiButton label="Soft" variant="primary-soft" @click="onClick" />
        <UiButton label="Ghost" variant="primary-ghost" @click="onClick" />
        <UiButton label="Link" variant="primary-link" @click="onClick" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">White</span>

      <div class="mt-2 flex items-center gap-4 rounded-md bg-gray-900 p-4">
        <UiButton label="Solid" variant="white-solid" @click="onClick" />
        <UiButton label="Soft" variant="white-soft" @click="onClick" />
        <UiButton label="Ghost" variant="white-ghost" @click="onClick" />
        <UiButton label="Link" variant="white-link" @click="onClick" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Black</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton label="Solid" variant="black-solid" @click="onClick" />
        <UiButton label="Soft" variant="black-soft" @click="onClick" />
        <UiButton label="Ghost" variant="black-ghost" @click="onClick" />
        <UiButton label="Link" variant="black-link" @click="onClick" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">With icons</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton label="Left" left-icon="i-heroicons-chevron-left-16-solid" @click="onClick" />
        <UiButton
          label="Right"
          variant="white-solid"
          right-icon="i-heroicons-chevron-right-16-solid"
          @click="onClick"
        />
        <UiButton loading variant="black-solid" label="Loading" @click="onClick" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Disabled</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton disabled label="Primary" @click="onClick" />
        <UiButton disabled label="White" variant="white-solid" @click="onClick" />
        <UiButton disabled label="Black" variant="black-solid" @click="onClick" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Sizes</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton label="X-Small" size="xs" @click="onClick" />
        <UiButton label="Small" @click="onClick" />
        <UiButton label="Medium" size="md" @click="onClick" />
      </div>
    </div>

    <div class="demo-category-container mt-4 items-start">
      <span class="demo-category-title">As link</span>

      <UiButton
        class="mt-2"
        target="_blank"
        label="Go to CGV WEB"
        to="https://cgvweb.com/en"
        right-icon="i-heroicons-arrow-top-right-on-square-20-solid"
      />
    </div>
  </UiContainer>
</template>
