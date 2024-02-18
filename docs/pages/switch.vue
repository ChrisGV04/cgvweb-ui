<script setup lang="ts">
import { UiBadge, UiContainer, UiFormInputLabel, UiSwitch } from '#components';
import { ref } from 'vue';

const checked = ref(false);
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Switch</h1>
    <p class="demo-page-description">
      A control that allows the user to toggle between checked and not checked.
    </p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Uncontrolled</span>

      <div class="mt-2 flex items-center gap-4">
        <UiFormInputLabel for="data-saver">Data saver</UiFormInputLabel>
        <UiSwitch id="data-saver" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Controlled</span>

      <div class="mt-2 flex items-center gap-4">
        <UiSwitch id="airplane-mode" v-model:checked="checked" />
        <UiFormInputLabel for="airplane-mode">Airplane mode</UiFormInputLabel>
        <UiBadge :color="checked ? 'green' : 'slate'">{{ checked ? 'On' : 'Off' }}</UiBadge>
      </div>
    </div>
  </UiContainer>
</template>
