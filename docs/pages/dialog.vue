<script setup lang="ts">
import { UiContainer, UiDialog } from '#components';
import { DialogClose, DialogTitle } from 'radix-vue';
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Dialog</h1>
    <p class="demo-page-description">Modal that pops-up to call the attention of the user.</p>

    <div class="demo-category-container mt-4 items-start">
      <span class="demo-category-title"
        >Controlled:
        <code class="demo-code-line">"{{ show }}"</code>
      </span>

      <UiButton label="Open dialog" class="mt-4" @click="show = true" />

      <UiDialog v-model:open="show">
        <template #content>
          <div class="px-6 py-8">
            <DialogTitle class="text-xl font-medium text-gray-900">This is a controlled dialog</DialogTitle>
            <p class="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero quo voluptatem
              perspiciatis similique, omnis explicabo quos consequatur, ab adipisci itaque excepturi,
              voluptatum voluptatibus a unde deserunt inventore veritatis quod delectus esse hic?
            </p>

            <DialogClose as-child>
              <UiButton label="Close dialog" class="mt-4" />
            </DialogClose>
          </div>
        </template>
      </UiDialog>
    </div>

    <div class="demo-category-container mt-4 items-start">
      <span class="demo-category-title">Uncontrolled</span>

      <UiDialog>
        <template #trigger>
          <UiButton label="Open dialog" class="mt-4" />
        </template>

        <template #content>
          <div class="px-6 py-8">
            <DialogTitle class="text-xl font-medium text-gray-900"
              >This is an uncontrolled dialog</DialogTitle
            >
            <p class="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero quo voluptatem
              perspiciatis similique, omnis explicabo quos consequatur, ab adipisci itaque excepturi,
              voluptatum voluptatibus a unde deserunt inventore veritatis quod delectus esse hic?
            </p>

            <DialogClose as-child>
              <UiButton label="Close dialog" class="mt-4" />
            </DialogClose>
          </div>
        </template>
      </UiDialog>
    </div>
  </UiContainer>
</template>
