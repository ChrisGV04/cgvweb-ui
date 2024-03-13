<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { container } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import { twJoin, twMerge } from 'tailwind-merge';
import { toRef, withDefaults } from 'vue';

const config = mergeConfig<typeof container>(
  appConfig.ui.container.strategy,
  appConfig.ui.container,
  container,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

const props = withDefaults(defineProps<PrimitiveProps & { class?: any; ui?: UiConfig }>(), {
  as: 'div',
  ui: () => ({}) as UiConfig,
});

const { ui } = useUI('container', toRef(props, 'ui'), config);
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :class="twMerge(twJoin(ui.base, ui.constrained, ui.xPadding, ui.yPadding), props.class)"
  >
    <slot />
  </Primitive>
</template>
