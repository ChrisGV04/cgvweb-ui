<script setup lang="ts">
import { useAppConfig } from "#imports";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { defu } from "defu";
import { computed, type PropType } from "vue";
import type { UiDialogConfig } from "../../types";
// @ts-expect-error
import buildAppConfig from "#build/app.config";

type UiConfig = Partial<UiDialogConfig>;

const emit = defineEmits([
  "update:modelValue",
  "close",
  "before-leave",
  "after-leave",
  "before-enter",
  "after-enter",
]);

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  overlay: { type: Boolean, default: true },
  preventClose: { type: Boolean, default: false },
  ui: {
    type: Object as PropType<UiConfig>,
    default: (): UiConfig => buildAppConfig.ui.dialog,
  },
});

// Merge UI config
const appConfig = useAppConfig();
const ui = computed<UiConfig>(() => defu({}, props.ui, appConfig.ui.dialog));

const isOpen = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

function close() {
  if (props.preventClose) return;

  isOpen.value = false;
  emit("close");
}
</script>

<template>
  <TransitionRoot
    :show="isOpen"
    as="template"
    @after-leave="emit('after-leave')"
    @before-leave="emit('before-leave')"
    @after-enter="emit('after-enter')"
    @before-enter="emit('before-enter')"
  >
    <Dialog :class="ui.wrapper" @close="close">
      <TransitionChild as="template" v-bind="ui.overlay.transition">
        <div :class="[ui.overlay.base, ui.overlay.background]" />
      </TransitionChild>

      <div :class="ui.inner">
        <div :class="[ui.container, ui.padding]">
          <TransitionChild as="template" v-bind="ui.transition">
            <DialogPanel
              :class="[
                ui.base,
                ui.width,
                ui.height,
                ui.background,
                ui.ring,
                ui.rounded,
                ui.shadow,
              ]"
            >
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>