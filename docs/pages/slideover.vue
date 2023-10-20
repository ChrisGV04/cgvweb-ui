<script setup lang="ts">
import { UiContainer, UiSlideover } from "#components";
import { ref } from "vue";

const showSlideover = ref(false);
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Slideover</h1>
    <p class="demo-page-description">
      Modal that slides from the side of the screen to call the attention of the
      user.
    </p>

    <UiButton
      class="mt-3"
      label="Open slideover"
      @click="showSlideover = true"
    />

    <UiSlideover v-model="showSlideover" side="left">
      <div class="flex flex-col px-4 py-6">
        <h2 class="text-xl font-medium text-gray-900">This is a slideover</h2>
        <p class="mt-3 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugit
          impedit, natus, ea libero vitae soluta expedita ratione mollitia fuga
          similique, dicta aliquam? Distinctio nulla, vel quibusdam eligendi
          nostrum perferendis!
        </p>

        <UiButton
          block
          class="mt-3"
          label="Close slideover"
          @click="showSlideover = false"
        />
      </div>
    </UiSlideover>
  </UiContainer>
</template>
