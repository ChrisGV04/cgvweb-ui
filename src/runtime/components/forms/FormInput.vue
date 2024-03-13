<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import UiIcon from '#ui/components/elements/Icon.vue';
import UiFormField from '#ui/components/forms/FormField.vue';
import { useUI } from '#ui/composables/useUI';
import type { InputProps, Strategy } from '#ui/types';
import { formInput } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { getUiFormFieldProps } from '#ui/utils/forms';
import { useVModel } from '@vueuse/core';
import omit from 'just-omit';
import { useForwardProps } from 'radix-vue';
import { twMerge } from 'tailwind-merge';
import { defineOptions, toRef, withDefaults } from 'vue';

const config = mergeConfig<typeof formInput>(
  appConfig.ui?.formInput?.strategy,
  appConfig.ui?.formInput,
  formInput,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

defineOptions({ inheritAttrs: false });
const props = withDefaults(defineProps<InputProps<UiConfig>>(), {
  type: 'text',
  modelValue: undefined,
  prefixIcon: undefined,
  prefixText: undefined,
  suffixText: undefined,
  placeholder: undefined,
  defaultValue: undefined,
  ui: () => ({}) as UiConfig,
});
const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
  (e: 'click:prefix'): void;
  (e: 'click:suffix'): void;
}>();

const $value = useVModel(props, 'modelValue', emits, { passive: true, defaultValue: props.defaultValue });

const { ui, attrs } = useUI('formInput', toRef(props, 'ui'), config);

const fieldProps = useForwardProps(() => getUiFormFieldProps(omit(props, ['ui'])));
</script>

<template>
  <UiFormField v-bind="fieldProps" :name="props.name">
    <div :class="twMerge(ui.base, ui.rounded, ui.ring, ui.border)">
      <slot name="prefix">
        <span v-if="props.prefixText" :class="twMerge(ui.addons, 'ml-3')" @click="emits('click:prefix')">{{
          props.prefixText
        }}</span>
        <UiIcon
          v-else-if="props.prefixIcon"
          :name="props.prefixIcon"
          :class="twMerge(ui.icon, 'ml-3')"
          @click="emits('click:prefix')"
        />
      </slot>

      <input
        :id="props.name"
        v-model="$value"
        v-bind="attrs"
        :name="props.name"
        :type="props.type"
        :placeholder="props.placeholder"
        :disabled="props.disabled || props.readOnly"
        :class="twMerge(ui.input.base, ui.input.padding, ui.input.font)"
      />

      <slot name="suffix">
        <span v-if="props.suffixText" :class="twMerge(ui.addons, 'mr-3')" @click="emits('click:suffix')">{{
          props.suffixText
        }}</span>
        <UiIcon
          v-else-if="props.suffixIcon"
          :name="props.suffixIcon"
          :class="twMerge(ui.icon, 'mr-3')"
          @click="emits('click:suffix')"
        />
      </slot>
    </div>
  </UiFormField>
</template>
