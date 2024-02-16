<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { mergeConfig } from '#ui/utils';
import tooltip from '../../ui.config/tooltip';

const config = mergeConfig<typeof tooltip>(appConfig.ui.strategy, appConfig.ui.tooltip, tooltip);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };
</script>

<script setup lang="ts">
import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { useToNumber } from '@vueuse/core';
import type { TooltipContentProps } from 'radix-vue';
import { Tooltip } from 'radix-vue/namespaced';
import { twMerge } from 'tailwind-merge';
import type { PropType } from 'vue';
import { computed, defineOptions, toRef } from 'vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  content: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  collisionBoundary: {
    type: [Object, Array] as PropType<Element | (Element | null)[] | null>,
    default: undefined,
  },
  delay: {
    type: [Number, String],
    default: () => config.default.delay,
  },
  offset: {
    type: [Number, String],
    default: () => config.default.offset,
  },
  align: {
    type: String as PropType<TooltipContentProps['align']>,
    default: () => config.default.align,
    validate: (value) => ['start', 'center', 'end'].includes(value),
  },
  side: {
    type: String as PropType<TooltipContentProps['side']>,
    default: () => config.default.side,
    validate: (value) => ['top', 'right', 'bottom', 'left'].includes(value),
  },
  ui: {
    type: Object as PropType<UiConfig>,
    default: () => ({}) as UiConfig,
  },
});

const { ui } = useUI('tooltip', toRef(props, 'ui'), config);
const numOffset = useToNumber(props.offset);
const numDelay = useToNumber(props.delay);

const tooltipClasses = computed(() =>
  twMerge(
    ui.value.container,
    ui.value.border,
    ui.value.size,
    ui.value.padding,
    ui.value.font,
    ui.value.transition,
  ),
);
</script>

<template>
  <Tooltip.Provider :delay-duration="numDelay">
    <Tooltip.Root>
      <Tooltip.Trigger as-child>
        <slot />
      </Tooltip.Trigger>

      <Tooltip.Portal v-if="!disabled">
        <Tooltip.Content
          as-child
          :side="side"
          :align="align"
          :side-offset="numOffset"
          :collision-boundary="collisionBoundary"
        >
          <slot name="content" :classes="tooltipClasses">
            <div :class="tooltipClasses">
              {{ content }}
            </div>
          </slot>
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
</template>
