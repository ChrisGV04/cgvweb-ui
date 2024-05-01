<script setup lang="ts">
// @ts-expect-error This import only exists after build
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { tooltip } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { useToNumber } from '@vueuse/core';
import type { TooltipContentProps } from 'radix-vue';
import { Tooltip } from 'radix-vue/namespaced';
import { twMerge } from 'tailwind-merge';
import type { PropType } from 'vue';
import { computed, defineOptions, toRef } from 'vue';

const config = mergeConfig<typeof tooltip>(appConfig.ui?.tooltip?.strategy, appConfig.ui?.tooltip, tooltip);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

defineOptions({ inheritAttrs: false });

const props = defineProps({
  content: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  delay: { type: [Number, String], default: undefined },
  offset: { type: [Number, String], default: undefined },
  collisionBoundary: {
    type: [Object, Array] as PropType<Element | (Element | null)[] | null>,
    default: undefined,
  },
  align: {
    type: String as PropType<TooltipContentProps['align']>,
    default: undefined,
    validate: (value) => ['start', 'center', 'end', undefined].includes(value),
  },
  side: {
    type: String as PropType<TooltipContentProps['side']>,
    default: undefined,
    validate: (value) => ['top', 'right', 'bottom', 'left', undefined].includes(value),
  },
  ui: {
    type: Object as PropType<UiConfig>,
    default: () => ({}) as UiConfig,
  },
});

const { ui } = useUI('tooltip', toRef(props, 'ui'), config);

// With config defaults
const numOffset = useToNumber(() => props.offset ?? ui.value.default.offset);
const numDelay = useToNumber(() => props.delay ?? ui.value.default.delay);
const align = computed(() => props.align ?? ui.value.default.align);
const side = computed(() => props.side ?? ui.value.default.side);

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
