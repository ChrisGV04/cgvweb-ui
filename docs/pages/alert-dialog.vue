<script setup lang="ts">
import { UiAlertDialog, UiContainer } from '#components';

const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));

async function onConfirm() {
  console.log('Starting action');
  await wait();
  console.log('Completed action!');
}
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Alert Dialog</h1>
    <p class="demo-page-description">
      A modal dialog that interrupts the user with important content and expects a response.
    </p>

    <div class="demo-category-container mt-4 items-start">
      <span class="demo-category-title">Demo</span>

      <UiAlertDialog
        variant="danger"
        title="Confirm delete"
        description="Do you really want to delete this item? This action cannot be undone"
        :confirm-btn="{ label: 'Confirm', action: onConfirm, variant: 'black-solid' }"
        :cancel-btn="{ label: 'Nevermind', variant: 'black-ghost' }"
      >
        <template #trigger>
          <UiButton label="Delete item" class="mt-2" />
        </template>
      </UiAlertDialog>
    </div>
  </UiContainer>
</template>
