<script lang="ts">
import type { UseFloatingOptions } from "@floating-ui/vue";
import {
  autoUpdate,
  flip,
  offset as offsetMw,
  shift,
  useFloating,
} from "@floating-ui/vue";
import { useToNumber } from "@vueuse/core";
import { defu } from "defu";
import type { PropType } from "vue";
import { computed, defineComponent, ref, toRef } from "vue";
import { useUI } from "../../composables/useUI";
import type { Strategy } from "../../types";
import { tooltip } from "../../ui.config";
import { mergeConfig } from "../../utils";
// @ts-expect-error
import appConfig from "#build/app.config";

const config = mergeConfig<typeof tooltip>(
  appConfig.ui.strategy,
  appConfig.ui.tooltip,
  tooltip,
);

export default defineComponent({
  inheritAttrs: false,
  props: {
    text: { type: String, default: null },
    prevent: { type: Boolean, default: false },
    offset: { type: [String, Number], default: 8 },
    openDelay: { type: [String, Number], default: 0 },
    closeDelay: { type: [String, Number], default: 0 },
    placement: {
      type: String as PropType<UseFloatingOptions["placement"]>,
      default: "bottom",
      validator: (value: string) =>
        [
          "top",
          "right",
          "bottom",
          "left",
          "top-start",
          "top-end",
          "right-start",
          "right-end",
          "bottom-start",
          "bottom-end",
          "left-start",
          "left-end",
        ].includes(value),
    },
    floating: {
      type: Object as PropType<UseFloatingOptions>,
      default: (): UseFloatingOptions => ({}),
    },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: undefined,
    },
    ui: {
      type: Object as PropType<
        Partial<typeof config & { strategy?: Strategy }>
      >,
      default: undefined,
    },
  },

  setup(props, { expose }) {
    const { ui, attrs } = useUI(
      "tooltip",
      toRef(props, "ui"),
      config,
      toRef(props, "class"),
    );

    const numOffset = useToNumber(props.offset);
    const numOpenDelay = useToNumber(props.openDelay);
    const numCloseDelay = useToNumber(props.closeDelay);

    const floating = computed<UseFloatingOptions>(() =>
      defu(
        {},
        props.floating,
        ui.value.floating as UseFloatingOptions,
        {
          placement: props.placement,
          whileElementsMounted: autoUpdate,
          middleware: [
            offsetMw(numOffset.value),
            shift({ padding: 8 }),
            flip(),
          ],
        } as UseFloatingOptions,
      ),
    );

    const triggerRef = ref<HTMLElement | null>(null);
    const containerRef = ref<HTMLElement | null>(null);

    const { floatingStyles, update } = useFloating(
      triggerRef,
      containerRef,
      floating.value,
    );
    expose({ update }); // Expose the update method in case it's required

    const open = ref(false);
    let openTimeout: NodeJS.Timeout | null = null;
    let closeTimeout: NodeJS.Timeout | null = null;

    function showTooltip() {
      // Cancel programmed closing
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }

      // Dropdown already open
      if (open.value) {
        return;
      }

      openTimeout =
        openTimeout ||
        setTimeout(() => {
          open.value = true;
          openTimeout = null;
        }, numOpenDelay.value);
    }

    function hideTooltip() {
      // Cancel programmed opening
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }

      // ropdown already closed
      if (!open.value) {
        return;
      }

      closeTimeout =
        closeTimeout ||
        setTimeout(() => {
          open.value = false;
          closeTimeout = null;
        }, numCloseDelay.value);
    }

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      open,
      triggerRef,
      containerRef,
      floatingStyles,
      hideTooltip,
      showTooltip,
    };
  },
});
</script>

<template>
  <div
    ref="triggerRef"
    :class="ui.wrapper"
    v-bind="attrs"
    @blur="hideTooltip"
    @focus="showTooltip"
    @mouseover="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot :open="open">Hover</slot>

    <div
      v-if="open && !prevent"
      ref="containerRef"
      :style="floatingStyles"
      :class="[ui.container, ui.width]"
    >
      <Transition appear v-bind="ui.transition">
        <slot name="tooltip">
          <div
            :class="[
              ui.base,
              ui.background,
              ui.color,
              ui.rounded,
              ui.shadow,
              ui.ring,
            ]"
          >
            <slot name="text">
              {{ text }}
            </slot>
          </div>
        </slot>
      </Transition>
    </div>
  </div>
</template>
