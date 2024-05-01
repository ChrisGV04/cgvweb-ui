<script setup lang="ts">
// @ts-expect-error This import only exists after build
import appConfig from '#build/app.config';

import UiButton from '#ui/components/elements/Button.vue';
import { useUI } from '#ui/composables/useUI';
import type { AlertDialogProps, Strategy, UiOverlayEmits } from '#ui/types';
import { alertDialog } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { uiToTransitionProps } from '#ui/utils/transitions';
import { usePreferredReducedMotion, useVModel } from '@vueuse/core';
import { AlertDialog } from 'radix-vue/namespaced';
import { computed, defineOptions, ref, toRef, withDefaults } from 'vue';

const config = mergeConfig<typeof alertDialog>(
  appConfig.ui?.alertDialog?.strategy,
  appConfig.ui?.alertDialog,
  alertDialog,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<AlertDialogProps<UiConfig>>(), {
  open: undefined,
  ui: () => ({}) as UiConfig,
});

const emits = defineEmits<{ (e: 'update:open', value: boolean): void } & UiOverlayEmits>();

const $open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as any,
});

const { ui } = useUI('alertDialog', toRef(props, 'ui'), config);

// With config defaults
const variant = computed(() => props.variant ?? ui.value.default.variant);
const iconName = computed(() => props.icon ?? ui.value.variant[variant.value].icon);

// Disable transitions when prefered reduced motion
const reduceMotion = usePreferredReducedMotion();
const contentTransition = computed(() =>
  reduceMotion.value === 'no-preference' ? uiToTransitionProps(ui.value.transition) : {},
);
const overlayTransition = computed(() =>
  reduceMotion.value === 'no-preference' ? uiToTransitionProps(ui.value.overlay.transition) : {},
);

// Trigger functionality
const loading = ref(false);

async function handleConfirm() {
  if (!props.confirmBtn?.action) return;

  loading.value = true;

  try {
    const shouldClose = await props.confirmBtn.action();
    if (shouldClose !== false) $open.value = false;
  } catch (error) {
    console.error('Unhandled error on alert dialog:', error);
  }

  loading.value = false;
}
</script>

<template>
  <AlertDialog.Root v-model:open="$open">
    <AlertDialog.Trigger v-if="$slots.trigger" as-child>
      <slot name="trigger" :open="$open" />
    </AlertDialog.Trigger>

    <AlertDialog.Portal>
      <Transition v-bind="overlayTransition">
        <AlertDialog.Overlay :class="ui.overlay.base" />
      </Transition>

      <Transition
        v-bind="contentTransition"
        @before-enter="emits('before-enter')"
        @after-enter="emits('after-enter')"
        @before-leave="emits('before-leave')"
        @after-leave="emits('after-leave')"
      >
        <AlertDialog.Content :class="[ui.container, ui.layout, ui.size, ui.padding]">
          <div :class="[ui.icon.container, ui.icon.rounded, ui.variant[variant].color]">
            <UiIcon :name="iconName" :class="ui.icon.size" />
          </div>

          <div class="flex-1">
            <AlertDialog.Title :class="ui.title">{{ props.title }}</AlertDialog.Title>

            <AlertDialog.Description :class="ui.description">
              {{ props.description }}
            </AlertDialog.Description>

            <slot name="addon" />

            <div :class="ui.actions.container">
              <UiButton
                v-if="props.confirmBtn"
                :loading="loading"
                :class="ui.actions.buttons"
                :label="props.confirmBtn.label"
                :variant="props.confirmBtn.variant"
                @click="handleConfirm"
              />

              <AlertDialog.Cancel v-if="props.cancelBtn" as-child>
                <UiButton
                  :disabled="loading"
                  :class="ui.actions.buttons"
                  :label="props.cancelBtn.label"
                  :variant="props.cancelBtn.variant"
                  @click="$open = false"
                />
              </AlertDialog.Cancel>
            </div>
          </div>
        </AlertDialog.Content>
      </Transition>
    </AlertDialog.Portal>
  </AlertDialog.Root>
</template>
