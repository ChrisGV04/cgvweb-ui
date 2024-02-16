<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { mergeConfig } from '#ui/utils';
import dialog from '../../ui.config/dialog';

const config = mergeConfig<typeof dialog>(appConfig.ui.strategy, appConfig.ui.dialog, dialog);
</script>

<script setup lang="ts">
import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { useVModel } from '@vueuse/core';
import { Dialog } from 'radix-vue/namespaced';
import { twMerge } from 'tailwind-merge';
import type { PropType } from 'vue';
import { defineOptions, toRef } from 'vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  defaultOpen: Boolean,
  open: { type: Boolean, default: undefined }, // v-model:open To use as controlled component
  ui: {
    type: Object as PropType<Partial<typeof config> & { strategy?: Strategy }>,
    default: () => ({}),
  },
});
const emits = defineEmits({ 'update:open': (value: boolean) => true });

const $open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as any,
});

const { ui } = useUI('dropdown', toRef(props, 'ui'), config);
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

      <Dialog.Content :class="twMerge(ui.container, ui.size, ui.transition)">
        <slot name="content" />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
</template>
