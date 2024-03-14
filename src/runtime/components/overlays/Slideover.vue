<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { slideover } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { uiToTransitionProps } from '#ui/utils/transitions';
import { usePreferredReducedMotion, useVModel } from '@vueuse/core';
import type { PopoverContentProps } from 'radix-vue';
import { Dialog } from 'radix-vue/namespaced';
import { twMerge } from 'tailwind-merge';
import type { PropType, TransitionProps } from 'vue';
import { computed, defineOptions, toRef } from 'vue';

const config = mergeConfig<typeof slideover>(
  appConfig.ui?.slideover?.strategy,
  appConfig.ui?.slideover,
  slideover,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

defineOptions({ inheritAttrs: false });

const props = defineProps({
  defaultOpen: Boolean,
  open: { type: Boolean, default: undefined }, // v-model:open To use as controlled component
  side: {
    type: String as PropType<PopoverContentProps['side']>,
    default: 'right',
    validator: (value: string) => ['top', 'bottom', 'left', 'right'].includes(value),
  },
  ui: {
    type: Object as PropType<UiConfig>,
    default: () => ({}) as UiConfig,
  },
});
const emits = defineEmits<{
  (e: 'update:open', value: boolean): void;
  (e: 'before-enter'): void;
  (e: 'after-enter'): void;
  (e: 'before-leave'): void;
  (e: 'after-leave'): void;
}>();

const $open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as any,
});

const { ui } = useUI('slideover', toRef(props, 'ui'), config);

// Disable transitions when prefered reduced motion
const reduceMotion = usePreferredReducedMotion();
const overlayTransition = computed(() =>
  reduceMotion.value === 'no-preference' ? uiToTransitionProps(ui.value.overlay.transition) : {},
);

const containerValues = computed<{ classes: string; transition: TransitionProps }>(() => {
  let position = '';
  let outPos = '';

  switch (props.side) {
    case 'top':
      position = 'inset-x-0 top-0';
      outPos = '-translate-y-full';
      break;
    case 'bottom':
      position = 'inset-x-0 bottom-0';
      outPos = 'translate-y-full';
      break;
    case 'left':
      position = 'inset-y-0 left-0 h-full w-3/4 sm:max-w-sm';
      outPos = '-translate-x-full';
      break;
    case 'right':
      position = 'inset-y-0 right-0 h-full w-3/4 sm:max-w-sm';
      outPos = 'translate-x-full';
      break;
    default:
      break;
  }

  return {
    classes: twMerge(ui.value.container, position, ui.value.size),
    transition:
      reduceMotion.value === 'reduce'
        ? {}
        : {
            enterActiveClass: ui.value.transition.enterActive,
            leaveActiveClass: ui.value.transition.leaveActive,
            enterFromClass: outPos,
            leaveToClass: outPos,
          },
  };
});
</script>

<template>
  <Dialog.Root v-model:open="$open">
    <Dialog.Trigger v-if="$slots.trigger" as-child>
      <slot name="trigger" :open="$open" />
    </Dialog.Trigger>

    <Dialog.Portal>
      <Transition v-bind="overlayTransition">
        <Dialog.Overlay :class="ui.overlay.base" />
      </Transition>

      <Transition
        v-bind="containerValues.transition"
        @before-enter="emits('before-enter')"
        @after-enter="emits('after-enter')"
        @before-leave="emits('before-leave')"
        @after-leave="emits('after-leave')"
      >
        <Dialog.Content :data-side="props.side" :class="containerValues.classes">
          <slot name="content" />
        </Dialog.Content>
      </Transition>
    </Dialog.Portal>
  </Dialog.Root>
</template>
