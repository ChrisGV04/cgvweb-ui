<script setup lang="ts">
import { UiContainer, UiFormLabel, UiRadioGroup, UiRadioGroupItem } from '#components';
import { ref } from 'vue';

const paymentMethod = ref('cash');
const viewMode = ref('');
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Radio Group</h1>
    <p class="demo-page-description">
      A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked
      at a time.
    </p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Uncontrolled</span>

      <UiRadioGroup class="mt-2 space-y-2">
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="yes" value="yes" />
          <UiFormLabel for="yes">Yes</UiFormLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="no" value="no" />
          <UiFormLabel for="no">No</UiFormLabel>
        </div>
      </UiRadioGroup>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title"
        >Controlled:
        <code class="demo-code-line">"{{ paymentMethod }}"</code>
      </span>

      <UiRadioGroup v-model="paymentMethod" class="mt-2 space-y-2">
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="cash" value="cash" />
          <UiFormLabel for="cash">Efectivo</UiFormLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="card" value="card" />
          <UiFormLabel for="card">Tarjeta</UiFormLabel>
        </div>
      </UiRadioGroup>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title"
        >Horizontal: <code class="demo-code-line">"{{ viewMode }}"</code></span
      >

      <UiRadioGroup v-model="viewMode" orientation="horizontal" class="mt-2 flex gap-6">
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="default" value="default" />
          <UiFormLabel for="default">Predeterminado</UiFormLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="comfortable" value="comfortable" />
          <UiFormLabel for="comfortable">Espaciado</UiFormLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="compact" value="compact" />
          <UiFormLabel for="compact">Compacto</UiFormLabel>
        </div>
      </UiRadioGroup>
    </div>
  </UiContainer>
</template>
