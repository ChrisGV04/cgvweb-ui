<script setup lang="ts">
import { UiCombobox, UiContainer } from '#components';
import type { ComboboxItem } from '#ui/types';
import { ref } from 'vue';

const fruit = ref<string>();
const ingredients = ref<string[]>([]);

const optionsList: ComboboxItem[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pineapple', value: 'pineapple' },
];

const groupList: Record<string, ComboboxItem[]> = {
  Fruits: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Grapes', value: 'grapes' },
    { label: 'Orange', value: 'orange' },
    { label: 'Pineapple', value: 'pineapple' },
  ],
  Vegetables: [
    { label: 'Carrot', value: 'carrot' },
    { label: 'Broccoli', value: 'broccoli' },
    { label: 'Aubergine', value: 'aubergine' },
    { label: 'Onion', value: 'onion' },
  ],
};

const fakeApiWait = () => new Promise((resolve) => setTimeout(resolve, 2000));

async function fruitFilter(term: string): Promise<ComboboxItem[]> {
  if (!term) return [];
  await fakeApiWait();
  return optionsList.filter((o) => o.label?.includes(term));
}
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Combobox</h1>
    <p class="demo-page-description">Choose from a list of suggested values</p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title"
        >Normal <code class="demo-code-line">"{{ fruit }}"</code></span
      >

      <UiCombobox
        v-model="fruit"
        name="fruit"
        label="Fruit"
        placeholder="Choose a fruit"
        class="mt-2"
        :options="optionsList"
        :filter-function="fruitFilter"
      />
    </div>

    <div class="demo-category-container mt-6">
      <span class="demo-category-title"
        >Groupped <code class="demo-code-line">"{{ ingredients }}"</code></span
      >

      <UiCombobox
        v-model="ingredients"
        multiple
        class="mt-2"
        name="ingredient"
        label="Ingredient"
        placeholder="Choose an ingredient"
        :options="groupList"
      />
    </div>
  </UiContainer>
</template>
