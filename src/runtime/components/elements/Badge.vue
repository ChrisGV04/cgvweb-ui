<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { badge } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';

const config = mergeConfig<typeof badge>(appConfig.ui?.badge?.strategy, appConfig.ui?.badge, badge);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };
</script>

<script setup lang="ts">
import { useUI } from '#ui/composables/useUI';
import type { BadgeColor, BadgeSize, Strategy } from '#ui/types';
import { twJoin, twMerge } from 'tailwind-merge';
import type { PropType } from 'vue';
import { defineOptions, toRef } from 'vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  dot: Boolean,
  interactive: Boolean,
  label: { type: [String, Number], default: null },
  size: {
    type: String as PropType<BadgeSize>,
    default: () => config.default.size,
  },
  color: {
    type: String as PropType<BadgeColor>,
    default: () => config.default.color,
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
  ui: {
    type: Object as PropType<UiConfig>,
    default: () => ({}) as UiConfig,
  },
});

const { ui, attrs } = useUI('badge', toRef(props, 'ui'), config);
</script>

<template>
  <span
    v-bind="attrs"
    :data-interactive="interactive ? '' : undefined"
    :class="twMerge(twJoin(ui.base, ui.font, ui.size[props.size], ui.color[props.color]), props.class)"
  >
    <svg v-if="dot" viewBox="0 0 6 6" aria-hidden="true" fill="currentColor" class="size-1.5">
      <circle cx="3" cy="3" r="3" />
    </svg>

    <slot />
  </span>
</template>
