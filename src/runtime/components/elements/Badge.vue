<script setup lang="ts">
// @ts-expect-error This import only exists after build
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { BadgeProps, Strategy } from '#ui/types';
import { badge } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { Primitive } from 'radix-vue';
import { twJoin, twMerge } from 'tailwind-merge';
import { computed, toRef, withDefaults } from 'vue';

const config = mergeConfig<typeof badge>(appConfig.ui?.badge?.strategy, appConfig.ui?.badge, badge);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

const props = withDefaults(defineProps<BadgeProps<UiConfig>>(), {
  as: 'span',
  class: undefined,
  ui: () => ({}) as UiConfig,
});

const { ui } = useUI('badge', toRef(props, 'ui'), config);

// With config defaults
const size = computed(() => props.size ?? ui.value.default.size);
const color = computed(() => props.color ?? ui.value.default.color);
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :data-interactive="interactive ? '' : undefined"
    :class="twMerge(twJoin(ui.base, ui.font, ui.size[size], ui.color[color]), props.class)"
  >
    <svg v-if="dot" viewBox="0 0 6 6" aria-hidden="true" fill="currentColor" class="size-1.5">
      <circle cx="3" cy="3" r="3" />
    </svg>

    <slot>
      {{ label }}
    </slot>
  </Primitive>
</template>
