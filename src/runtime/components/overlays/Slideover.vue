<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { slideover } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { useVModel } from '@vueuse/core';
import type { PopoverContentProps } from 'radix-vue';
import { Dialog } from 'radix-vue/namespaced';
import { twJoin, twMerge } from 'tailwind-merge';
import type { PropType } from 'vue';
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
const emits = defineEmits<{ (e: 'update:open', value: boolean): void }>();

const $open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as any,
});

const { ui } = useUI('slideover', toRef(props, 'ui'), config);

const containerClasses = computed(() => {
  let position = '';

  switch (props.side) {
    case 'top':
      position = 'inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top';
      break;
    case 'bottom':
      position =
        'inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom';
      break;
    case 'left':
      position =
        'inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm';
      break;
    case 'right':
      position =
        'inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md';
      break;
    default:
      break;
  }

  return twMerge(twJoin(ui.value.container, ui.value.transition), position, ui.value.size);
});
</script>

<template>
  <Dialog.Root v-model:open="$open">
    <Dialog.Trigger as-child>
      <slot name="trigger" :open="$open">
        <UiButton label="Open" />
      </slot>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay :class="ui.overlay" />

      <Dialog.Content :data-side="props.side" :class="containerClasses">
        <slot name="content" />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
</template>
