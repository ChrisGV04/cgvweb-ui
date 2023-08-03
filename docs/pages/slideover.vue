<script setup lang="ts">
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

    <button
      type="button"
      @click="showSlideover = true"
      class="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 mt-8 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      Open slideover
    </button>

    <UiSlideover v-model="showSlideover">
      <div class="flex flex-col px-4 py-6">
        <h2 class="text-xl font-medium text-gray-900">This is a slideover</h2>
        <p class="mt-3 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugit
          impedit, natus, ea libero vitae soluta expedita ratione mollitia fuga
          similique, dicta aliquam? Distinctio nulla, vel quibusdam eligendi
          nostrum perferendis!
        </p>

        <button
          type="button"
          @click="showSlideover = false"
          class="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 mt-6 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Close slideover
        </button>
      </div>
    </UiSlideover>
  </UiContainer>
</template>
