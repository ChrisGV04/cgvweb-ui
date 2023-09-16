<script setup lang="ts">
import { useAppConfig, useAttrs } from "#imports";
import {
  autoUpdate,
  flip,
  offset as offsetMw,
  shift,
  useFloating,
  type UseFloatingOptions,
} from "@floating-ui/vue";
import { defu } from "defu";
import { omit } from "lodash-es";
import { twMerge } from "tailwind-merge";
import { computed, ref, type PropType } from "vue";
import type { UiTooltipConfig } from "../../types";
import { defuTwMerge } from "../../utils";
// @ts-expect-error
import buildAppConfig from "#build/app.config";

type UiConfig = Partial<UiTooltipConfig>;

defineOptions({ inheritAttrs: false });
const attrs = useAttrs();

const props = defineProps({
  text: { type: String, default: undefined },
  offset: { type: Number, default: 8 },
  openDelay: { type: Number, default: 0 },
  closeDelay: { type: Number, default: 0 },
  prevent: { type: Boolean, default: false },
  placement: {
    type: String as PropType<UseFloatingOptions["placement"]>,
    default: "bottom",
  },
  floating: {
    type: Object as PropType<UseFloatingOptions>,
    default: (): UseFloatingOptions => ({}),
  },
  ui: {
    type: Object as PropType<UiConfig>,
    default: (): UiConfig => buildAppConfig.ui.tooltip,
  },
});

// Merge UI config
const appConfig = useAppConfig();
const ui = computed<UiTooltipConfig>(() =>
  defuTwMerge({}, props.ui, appConfig.ui.tooltip),
);

const floating = computed<UseFloatingOptions>(() =>
  defu(
    {},
    props.floating,
    ui.value.floating as UseFloatingOptions,
    {
      placement: props.placement,
      whileElementsMounted: autoUpdate,
      middleware: [offsetMw(props.offset), shift({ padding: 8 }), flip()],
    } as UseFloatingOptions,
  ),
);

const wrapperClass = computed(() =>
  twMerge(ui.value.wrapper, attrs.class as string),
);

const triggerRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);

const { floatingStyles, update } = useFloating(
  triggerRef,
  containerRef,
  floating.value,
);
defineExpose({ update }); // Expose the update method in case it's required

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
    }, props.openDelay);
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
    }, props.closeDelay);
}
</script>

<template>
  <div
    ref="triggerRef"
    :class="wrapperClass"
    v-bind="omit(attrs, ['class'])"
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
