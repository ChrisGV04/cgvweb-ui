<script setup lang="ts">
import { UiContainer, UiDialog } from "#components";
import { ref } from "vue";

const showDialog = ref(false);
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Dialog</h1>
    <p class="demo-page-description">
      Modal that pops-up to call the attention of the user.
    </p>

    <button
      type="button"
      class="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 mt-8 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      @click="showDialog = true"
    >
      Open dialog
    </button>

    <UiDialog v-model="showDialog">
      <div class="px-6 py-8">
        <h2 class="text-xl font-medium text-gray-900">This is a dialog</h2>
        <p class="mt-3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero
          quo voluptatem perspiciatis similique, omnis explicabo quos
          consequatur, ab adipisci itaque excepturi, voluptatum voluptatibus a
          unde deserunt inventore veritatis quod delectus esse hic?
        </p>

        <button
          type="button"
          class="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 mt-6 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          @click="showDialog = false"
        >
          Close dialog
        </button>
      </div>
    </UiDialog>
  </UiContainer>
</template>
