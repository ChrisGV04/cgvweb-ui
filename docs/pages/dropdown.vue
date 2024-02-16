<script setup lang="ts">
import { UiButton, UiContainer, UiDropdown } from '#components';
import type { DropdownItem } from '#ui/types';
import { ref } from 'vue';

const isOpen = ref(false);

const demoItems: DropdownItem[][] = [
  [
    { label: 'Profile', icon: 'i-heroicons-user' },
    { label: 'Billing', icon: 'i-heroicons-credit-card' },
    { label: 'Settings', icon: 'i-heroicons-cog-6-tooth' },
  ],
  [
    { label: 'Teams', icon: 'i-heroicons-users' },
    { label: 'New Team', icon: 'i-heroicons-plus', disabled: true },
  ],
];
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Dropdown menu</h1>
    <p class="demo-page-description">
      Displays a menu to the user with a set of links or actions after being triggered.
    </p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Controlled component (isOpen: {{ isOpen }})</span>

      <div class="mt-2 flex items-center gap-4">
        <UiDropdown v-model:open="isOpen" :items="demoItems">
          <UiButton label="Menu" trailing-icon="i-heroicons-bars-3-16-solid" />
        </UiDropdown>
        <UiButton variant="white-solid" label="Open from external" @click="isOpen = true" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Uncontrolled</span>

      <div class="mt-2 flex items-center gap-4">
        <UiDropdown :items="demoItems" label="My Account">
          <UiButton label="Options" variant="white-solid" trailing-icon="i-heroicons-chevron-down-16-solid" />
        </UiDropdown>
      </div>
    </div>
  </UiContainer>
</template>
