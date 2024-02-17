<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { formInput } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';

const config = mergeConfig<typeof formInput>(appConfig.ui.strategy, appConfig.ui.formInput, formInput);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };
</script>

<script setup lang="ts">
import UiIcon from '#ui/components/elements/Icon.vue';
import UiInputLabel from '#ui/components/forms/FormInputLabel.vue';
import { useUI } from '#ui/composables/useUI';
import type { InputProps, Strategy } from '#ui/types';
import { useVModel } from '@vueuse/core';
import { Primitive } from 'radix-vue';
import { twMerge } from 'tailwind-merge';
import { computed, defineOptions, toRef, withDefaults } from 'vue';

defineOptions({ inheritAttrs: false });
const props = withDefaults(defineProps<InputProps<UiConfig>>(), {
  as: 'div',
  type: 'text',
  label: undefined,
  modelValue: undefined,
  message: undefined,
  prefixIcon: undefined,
  prefixText: undefined,
  suffixText: undefined,
  placeholder: undefined,
  defaultValue: undefined,
  class: undefined,
  ui: () => ({}) as UiConfig,
});
const emits = defineEmits({
  'update:modelValue': (payload: string | number) => true,
  'click:prefix': () => true,
  'click:suffix': () => true,
});

const $value = useVModel(props, 'modelValue', emits, { passive: true, defaultValue: props.defaultValue });

const { ui, attrs } = useUI('formInput', toRef(props, 'ui'), config);

const dataAttrs = computed(() => ({
  'data-error': props.error ? '' : undefined,
  'data-disabled-mode': props.readOnly ? 'read-only' : props.disabled ? 'disabled' : undefined,
}));
</script>

<template>
  <Primitive
    v-bind="dataAttrs"
    :as="props.as"
    :as-child="props.asChild"
    :class="twMerge(ui.wrapper, props.class, 'group')"
  >
    <slot name="label">
      <UiInputLabel v-if="props.label" :for="props.name" :mandatory="props.mandatory" :error="props.error">{{
        props.label
      }}</UiInputLabel>
    </slot>

    <div :class="twMerge(ui.container.base, ui.container.rounded, ui.container.ring, ui.container.border)">
      <slot name="prefix">
        <span
          v-if="props.prefixText"
          :class="twMerge(ui.font.addons, 'ml-3')"
          @click="emits('click:prefix')"
          >{{ props.prefixText }}</span
        >
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
        :class="twMerge(ui.input.base, ui.input.padding, ui.font.input)"
      />

      <slot name="suffix">
        <span
          v-if="props.suffixText"
          :class="twMerge(ui.font.addons, 'mr-3')"
          @click="emits('click:suffix')"
          >{{ props.suffixText }}</span
        >
        <UiIcon
          v-else-if="props.suffixIcon"
          :name="props.suffixIcon"
          :class="twMerge(ui.icon, 'mr-3')"
          @click="emits('click:suffix')"
        />
      </slot>
    </div>

    <slot name="message">
      <p v-if="props.message" :id="`${props.message}-hint`" :class="ui.font.message">{{ props.message }}</p>
    </slot>
  </Primitive>
</template>
