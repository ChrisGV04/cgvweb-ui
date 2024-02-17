<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { mergeConfig } from '#ui/utils';
import inputLabel from '../../ui.config/inputLabel';

const config = mergeConfig<typeof inputLabel>(appConfig.ui.strategy, appConfig.ui.inputLabel, inputLabel);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };
</script>

<script setup lang="ts">
import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { Label, type LabelProps } from 'radix-vue';
import { toRef, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<LabelProps & { mandatory?: boolean; error?: boolean; class?: any; ui?: UiConfig }>(),
  {
    as: 'label',
    class: undefined,
    ui: () => ({}) as UiConfig,
  },
);

const { ui, attrs } = useUI('inputLabel', toRef(props, 'ui'), config);
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
