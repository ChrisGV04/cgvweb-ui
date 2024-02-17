<script setup lang="ts">
import { UiBadge, UiContainer, UiFormInput } from '#components';
import { useToggle } from '@vueuse/core';
import { ref } from 'vue';

const [disabled, toggleDisabled] = useToggle(false);
const [showPwd, togglePwdShow] = useToggle(false);

const values = ref({
  displayName: '',
  handle: 'cgv.web',
  password: '',
});
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Form Input</h1>
    <p class="demo-page-description">Displays a form input field to accept user data.</p>

    <form class="mt-4 rounded-lg bg-gray-50 p-5" autocomplete="off" @submit.prevent>
      <UiBadge interactive :color="disabled ? 'orange' : 'green'" @click="toggleDisabled()">{{
        disabled ? 'Disabled' : 'Enabled'
      }}</UiBadge>

      <fieldset class="demo-category-container mt-4 gap-y-4" :disabled="disabled">
        <div class="flex gap-x-4">
          <UiFormInput
            v-model="values.displayName"
            name="display-name"
            label="Display name"
            placeholder="Introduce a public name"
            class="flex-1"
          />

          <UiFormInput
            v-model="values.handle"
            error
            name="handle"
            label="Handle"
            prefix-text="@"
            class="flex-1"
            message="This must be unique"
          />
        </div>

        <UiFormInput
          v-model="values.password"
          name="password"
          label="Password"
          message="At least 8 characters"
          :type="showPwd ? 'text' : 'password'"
          :suffix-icon="showPwd ? 'i-heroicons-eye' : 'i-heroicons-eye-slash-20-solid'"
          @click:suffix="togglePwdShow()"
        />
      </fieldset>
    </form>

    <div class="mt-4 flex w-full flex-col rounded-lg border border-gray-900/10 p-5">
      <span class="demo-page-description">The values:</span>
      <pre class="mt-1 rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-700">{{ values }}</pre>
    </div>
  </UiContainer>
</template>
