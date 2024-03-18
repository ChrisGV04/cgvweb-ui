<script setup lang="ts">
import { UiContainer, UiFormSelect } from '#components';
import type { FormSelectOptions } from '#ui/types';
import { ref } from 'vue';

const country = ref<string>();

const optionsList: FormSelectOptions = [
  { label: 'México', value: 'mx' },
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'Brazil', value: 'br' },
  { label: 'Argentina', value: 'ar', disabled: true },
  { label: 'Germany', value: 'de' },
  { label: 'Spain', value: 'es' },
  { label: 'Switzerland', value: 'sw' },
  { label: 'France', value: 'fr' },
  { label: 'England', value: 'en' },
];

const groupList: FormSelectOptions = {
  America: [
    { label: 'México', value: 'mx' },
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'Brazil', value: 'br' },
    { label: 'Argentina', value: 'ar' },
  ],
  Europe: [
    { label: 'Germany', value: 'de' },
    { label: 'Spain', value: 'es' },
    { label: 'Switzerland', value: 'sw' },
    { label: 'France', value: 'fr' },
    { label: 'England', value: 'en' },
  ],
};
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Select</h1>
    <p class="demo-page-description">
      Displays a list of options for the user to pick from—triggered by a button.
    </p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title"
        >Normal <code class="demo-code-line">"{{ country }}"</code></span
      >

      <UiFormSelect
        v-model="country"
        name="country"
        label="Country"
        class="mt-2"
        placeholder="Select your country"
        :options="optionsList"
      />
    </div>

    <div class="demo-category-container mt-6">
      <span class="demo-category-title"
        >Groupped <code class="demo-code-line">"{{ country }}"</code></span
      >

      <UiFormSelect
        v-model="country"
        class="mt-2"
        name="country-2"
        label="Country"
        placeholder="Select your favorite country"
        prefix-icon="i-heroicons-globe-alt-20-solid"
        :options="groupList"
      />
    </div>
  </UiContainer>
</template>
