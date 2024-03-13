<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';
import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { container } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { twJoin, twMerge } from 'tailwind-merge';
import type { PropType } from 'vue';
import { defineOptions, toRef } from 'vue';

const config = mergeConfig<typeof container>(
  appConfig.ui.container.strategy,
  appConfig.ui.container,
  container,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

defineOptions({ inheritAttrs: false });

const props = defineProps({
  as: { type: String, default: 'div' },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
  ui: {
    type: Object as PropType<UiConfig>,
    default: () => ({}) as UiConfig,
  },
});

const { ui, attrs } = useUI('container', toRef(props, 'ui'), config);
</script>

<template>
  <component
    :is="as"
    :class="twMerge(twJoin(ui.base, ui.xPadding, ui.yPadding, ui.constrained), props.class)"
    v-bind="attrs"
  >
    <slot />
  </component>
</template>
