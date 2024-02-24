<script setup lang="ts">
import { UiCombobox, UiContainer } from '#components';
import type { ComboboxItem } from '#ui/types';
import { ref } from 'vue';

const country = ref<string>();
const countries = ref<string[]>(['mx', 'de']);

const optionsList: ComboboxItem[] = [
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

const groupList: Record<string, ComboboxItem[]> = {
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

const fakeApiWait = () => new Promise((resolve) => setTimeout(resolve, 1000));

async function countryFilter(term: string): Promise<ComboboxItem[]> {
  if (!term) return [];
  await fakeApiWait();
  return optionsList.filter((o) => o.label?.toLowerCase().includes(term.toLowerCase()));
}
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Combobox</h1>
    <p class="demo-page-description">Choose from a list of suggested values</p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title"
        >Normal <code class="demo-code-line">"{{ country }}"</code></span
      >

      <UiCombobox
        v-model="country"
        name="country"
        label="Country"
        class="mt-2"
        placeholder="Select your country"
        search-placeholder="Search countries"
        :options="optionsList"
        :filter-fn="countryFilter"
      />
    </div>

    <div class="demo-category-container mt-6">
      <span class="demo-category-title"
        >Groupped <code class="demo-code-line">"{{ countries }}"</code></span
      >

      <UiCombobox
        v-model="countries"
        multiple
        class="mt-2"
        name="countries"
        label="Countries"
        search-placeholder="Search countries"
        placeholder="Select your favorite countries"
        prefix-icon="i-heroicons-globe-alt-20-solid"
        :options="groupList"
        :display-fn="(v: any) => `${v.length} selections`"
      />
    </div>
  </UiContainer>
</template>
