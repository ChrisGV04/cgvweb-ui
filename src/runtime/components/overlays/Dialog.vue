<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { useId } from '#imports';
import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { dialog } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import {
  Dialog as HDialog,
  DialogPanel as HDialogPanel,
  TransitionChild,
  TransitionRoot,
  provideUseId,
} from '@headlessui/vue';
import type { PropType } from 'vue';
import { computed, defineComponent, toRef } from 'vue';

const config = mergeConfig<typeof dialog>(appConfig.ui.strategy, appConfig.ui.dialog, dialog);

export default defineComponent({
  components: { HDialog, HDialogPanel, TransitionChild, TransitionRoot },
  inheritAttrs: false,
  props: {
    modelValue: { type: Boolean, default: false },
    appear: { type: Boolean, default: false },
    overlay: { type: Boolean, default: true },
    transition: { type: Boolean, default: true },
    preventClose: { type: Boolean, default: false },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: undefined,
    },
    ui: {
      type: Object as PropType<Partial<typeof config & { strategy?: Strategy }>>,
      default: undefined,
    },
  },
  emits: ['update:modelValue', 'close', 'before-leave', 'after-leave', 'before-enter', 'after-enter'],

  setup(props, { emit }) {
    const { ui, attrs } = useUI('dialog', toRef(props, 'ui'), config, toRef(props, 'class'));

    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });

    const transitionClass = computed(() => {
      if (!props.transition) return {};

      return {
        ...ui.value.transition,
      };
    });

    function close() {
      if (props.preventClose) return;

      isOpen.value = false;
      emit('close');
    }

    provideUseId(() => useId());

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      close,
      transitionClass,
    };
  },
});
</script>

<template>
  <TransitionRoot
    :show="isOpen"
    :appear="appear"
    as="template"
    @after-leave="$emit('after-leave')"
    @before-leave="$emit('before-leave')"
    @after-enter="$emit('after-enter')"
    @before-enter="$emit('before-enter')"
  >
    <HDialog :class="ui.wrapper" v-bind="attrs" @close="close">
      <TransitionChild v-if="overlay" as="template" :appear="appear" v-bind="ui.overlay.transition">
        <div :class="[ui.overlay.base, ui.overlay.background]" />
      </TransitionChild>

      <div :class="ui.inner">
        <div :class="[ui.container, ui.padding]">
          <TransitionChild as="template" :appear="appear" v-bind="transitionClass">
            <HDialogPanel
              :class="[ui.base, ui.width, ui.height, ui.background, ui.ring, ui.rounded, ui.shadow]"
            >
              <slot />
            </HDialogPanel>
          </TransitionChild>
        </div>
      </div>
    </HDialog>
  </TransitionRoot>
</template>
