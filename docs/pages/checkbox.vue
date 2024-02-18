<script setup lang="ts">
import { UiBadge, UiCheckbox, UiContainer, UiFormInputLabel } from '#components';
import { ref } from 'vue';

const checked = ref(false);
const indeterminate = ref<boolean | 'indeterminate'>('indeterminate');
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Checkbox</h1>
    <p class="demo-page-description">
      A control that allows the user to toggle between checked, not checked or indeterminate.
    </p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Uncontrolled</span>

      <div class="mt-2 flex items-center gap-4">
        <UiCheckbox id="terms" />
        <UiFormInputLabel for="terms">Accpet terms.</UiFormInputLabel>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Controlled</span>

      <div class="mt-2 flex items-center gap-4">
        <UiCheckbox id="notifications" v-model:checked="checked" />
        <UiFormInputLabel for="notifications">Enable notifications</UiFormInputLabel>
        <UiBadge :color="checked ? 'green' : 'slate'">{{ checked ? 'On' : 'Off' }}</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Indeterminate</span>

      <div class="mt-2 flex items-center gap-4">
        <UiCheckbox id="selection" v-model:checked="indeterminate" />
        <UiFormInputLabel for="selection">Selection</UiFormInputLabel>
      </div>
    </div>
  </UiContainer>
</template>
