<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { formLabel } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';

const config = mergeConfig<typeof formLabel>(
  appConfig.ui?.formLabel?.strategy,
  appConfig.ui?.formLabel,
  formLabel,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };
</script>

<script setup lang="ts">
import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { Label, type LabelProps } from 'radix-vue';
import { toRef, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<LabelProps & { mandatory?: boolean; error?: boolean; class?: any; ui?: UiConfig }>(),
  { as: 'label', class: undefined, ui: () => ({}) as UiConfig },
);

const { ui, attrs } = useUI('formLabel', toRef(props, 'ui'), config);
</script>

<template>
  <Label
    v-bind="attrs"
    :as="props.as"
    :as-child="props.asChild"
    :for="props.for"
    :class="ui.base"
    :data-error="props.error ? '' : undefined"
  >
    <slot />
    <span v-if="props.mandatory" :class="ui.mandatory">*</span>
  </Label>
</template>
