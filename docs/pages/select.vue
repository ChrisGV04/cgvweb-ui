<script setup lang="ts">
import { UiContainer, UiFormSelect, UiButton } from '#components';
import { SelectValue } from 'radix-vue';
import type { FormSelectOptions } from '#ui/types';
import { ref } from 'vue';

const country = ref<string | null>();

const optionsList: FormSelectOptions = [
  { label: 'None', value: null },
  { label: '🇦🇷 Argentina', value: 'ar' },
  { label: '🇧🇷 Brazil', value: 'br' },
  { label: '🇨🇦 Canada', value: 'ca' },
  { label: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England', value: 'en' },
  { label: '🇫🇷 France', value: 'fr' },
  { label: '🇩🇪 Germany', value: 'de' },
  { label: '🇲🇽 México', value: 'mx' },
  { label: '🇪🇸 Spain', value: 'es', disabled: true },
  { label: '🇨🇭 Switzerland', value: 'sw' },
  { label: '🇺🇸 United States', value: 'us' },
];

const framework = ref<string>();
const frameworkOptions: FormSelectOptions = {
  'Front-End': [
    { label: 'Nuxt.js', value: 'nuxt' },
    { label: 'Next.js', value: 'next' },
    { label: 'SvelteKit', value: 'sveltkit' },
    { label: 'Solid.js', value: 'solid' },
    { label: 'Quik', value: 'quick' },
    { label: 'HTML, CSS & Vanilla JavaScript', value: 'classic' },
  ],
  'Back-End': [
    { label: 'Express.js', value: 'express' },
    { label: 'Fastify', value: 'fastify' },
    { label: 'Nest.js', value: 'nest' },
    { label: 'Django', value: 'django' },
    { label: 'Ruby on Rails', value: 'ruby' },
    { label: 'Golang', value: 'golang' },
    { label: 'HTMX', value: 'htmx' },
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
        >Groupped <code class="demo-code-line">"{{ framework }}"</code></span
      >

      <UiFormSelect
        v-model="framework"
        class="mt-2"
        name="country-2"
        label="Framework"
        placeholder="Select your favorite framework"
        prefix-icon="i-heroicons-wrench-screwdriver-20-solid"
        :options="frameworkOptions"
      />
    </div>

    <div class="demo-category-container mt-6">
      <span class="demo-category-title">Custom trigger</span>

      <UiFormSelect
        v-model="framework"
        class="mt-2"
        name="country-2"
        label="Framework"
        prefix-icon="i-heroicons-wrench-screwdriver-20-solid"
        :options="frameworkOptions"
      >
        <template #trigger>
          <UiButton>
            <SelectValue placeholder="Select your favorite framework" />
          </UiButton>
        </template>
      </UiFormSelect>
    </div>
  </UiContainer>
</template>
