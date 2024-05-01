<script setup lang="ts">
// @ts-expect-error This import only exists after build
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { Strategy, UiOverlayEmits } from '#ui/types';
import { dialog } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { uiToTransitionProps } from '#ui/utils/transitions';
import { usePreferredReducedMotion, useVModel } from '@vueuse/core';
import { Dialog } from 'radix-vue/namespaced';
import type { PropType } from 'vue';
import { computed, defineOptions, toRef } from 'vue';

const config = mergeConfig<typeof dialog>(appConfig.ui?.dialog?.strategy, appConfig.ui?.dialog, dialog);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

defineOptions({ inheritAttrs: false });

const props = defineProps({
  defaultOpen: Boolean,
  open: { type: Boolean, default: undefined }, // v-model:open To use as controlled component
  ui: {
    type: Object as PropType<UiConfig>,
    default: () => ({}) as UiConfig,
  },
});
const emits = defineEmits<UiOverlayEmits & { (e: 'update:open', value: boolean): void }>();

const $open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as any,
});

const { ui } = useUI('dialog', toRef(props, 'ui'), config);

// Disable transitions when prefered reduced motion
const reduceMotion = usePreferredReducedMotion();
const contentTransition = computed(() =>
  reduceMotion.value === 'no-preference' ? uiToTransitionProps(ui.value.transition) : {},
);
const overlayTransition = computed(() =>
  reduceMotion.value === 'no-preference' ? uiToTransitionProps(ui.value.overlay.transition) : {},
);
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
        v-bind="contentTransition"
        @before-enter="emits('before-enter')"
        @after-enter="emits('after-enter')"
        @before-leave="emits('before-leave')"
        @after-leave="emits('after-leave')"
      >
        <Dialog.Content :class="[ui.container, ui.size]">
          <slot name="content" />
        </Dialog.Content>
      </Transition>
    </Dialog.Portal>
  </Dialog.Root>
</template>
