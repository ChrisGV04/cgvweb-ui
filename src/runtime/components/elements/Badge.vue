<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { BadgeColor, BadgeSize, Strategy } from '#ui/types';
import { badge } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { twJoin, twMerge } from 'tailwind-merge';
import { computed, defineOptions, toRef, type PropType } from 'vue';

const config = mergeConfig<typeof badge>(appConfig.ui?.badge?.strategy, appConfig.ui?.badge, badge);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

defineOptions({ inheritAttrs: false });

const props = defineProps({
  dot: Boolean,
  interactive: Boolean,
  size: String as PropType<BadgeSize>,
  color: String as PropType<BadgeColor>,
  label: { type: [String, Number], default: null },
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

// With config defaults
const size = computed(() => props.size ?? ui.value.default.size);
const color = computed(() => props.color ?? ui.value.default.size);
</script>

<template>
  <span
    v-bind="attrs"
    :data-interactive="interactive ? '' : undefined"
    :class="twMerge(twJoin(ui.base, ui.font, ui.size[size], ui.color[color]), props.class)"
  >
    <svg v-if="dot" viewBox="0 0 6 6" aria-hidden="true" fill="currentColor" class="size-1.5">
      <circle cx="3" cy="3" r="3" />
    </svg>

    <slot />
  </span>
</template>
