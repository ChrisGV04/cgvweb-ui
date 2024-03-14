<script setup lang="ts">
import { UiButton, UiContainer, UiSlideover } from '#components';
import { DialogClose, DialogDescription, DialogTitle } from 'radix-vue';
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Slideover</h1>
    <p class="demo-page-description">
      Modal that slides from the side of the screen to call the attention of the user.
    </p>

    <UiSlideover>
      <template #trigger>
        <UiButton label="Open slideover" class="mt-4" />
      </template>

      <template #content>
        <div class="px-6 py-8">
          <DialogTitle class="text-xl font-medium text-gray-900">This is a slideover</DialogTitle>

          <DialogDescription class="mt-3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugit impedit, natus, ea libero
            vitae soluta expedita ratione mollitia fuga similique, dicta aliquam? Distinctio nulla, vel
            quibusdam eligendi nostrum perferendis!
          </DialogDescription>

          <DialogClose as-child>
            <UiButton label="Close dialog" class="mt-4" />
          </DialogClose>
        </div>
      </template>
    </UiSlideover>
  </UiContainer>
</template>
