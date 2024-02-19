<script setup lang="ts">
import { UiContainer, UiFormInputLabel, UiRadioGroup, UiRadioGroupItem } from '#components';
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
          <UiFormInputLabel for="yes">Yes</UiFormInputLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="no" value="no" />
          <UiFormInputLabel for="no">No</UiFormInputLabel>
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
          <UiFormInputLabel for="cash">Efectivo</UiFormInputLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="card" value="card" />
          <UiFormInputLabel for="card">Tarjeta</UiFormInputLabel>
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
          <UiFormInputLabel for="default">Predeterminado</UiFormInputLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="comfortable" value="comfortable" />
          <UiFormInputLabel for="comfortable">Espaciado</UiFormInputLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="compact" value="compact" />
          <UiFormInputLabel for="compact">Compacto</UiFormInputLabel>
        </div>
      </UiRadioGroup>
    </div>
  </UiContainer>
</template>
