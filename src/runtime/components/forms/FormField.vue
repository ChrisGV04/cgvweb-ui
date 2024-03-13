<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import UiInputLabel from '#ui/components/forms/FormLabel.vue';
import { useUI } from '#ui/composables/useUI';
import type { FormFieldProps, Strategy } from '#ui/types';
import { formField } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { Primitive } from 'radix-vue';
import { twMerge } from 'tailwind-merge';
import { computed, toRef, withDefaults } from 'vue';

const config = mergeConfig<typeof formField>(
  appConfig.ui?.formField?.strategy,
  appConfig.ui?.formField,
  formField,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

const props = withDefaults(defineProps<FormFieldProps<UiConfig>>(), {
  as: 'div',
  class: undefined,
  ui: () => ({}) as UiConfig,
});

const { ui } = useUI('formField', toRef(props, 'ui'), config);

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

    <slot />

    <slot name="message">
      <p v-if="props.message" :id="`${props.name}-hint`" :class="ui.message">{{ props.message }}</p>
    </slot>
  </Primitive>
</template>
