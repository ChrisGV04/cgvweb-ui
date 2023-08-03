<script setup lang="ts">
import { useAppConfig } from "#imports";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  type UseFloatingOptions,
} from "@floating-ui/vue";
import { defu } from "defu";
import { computed, ref, type PropType } from "vue";
import type { UiTooltipConfig } from "../../types";
// @ts-expect-error
import buildAppConfig from "#build/app.config";

type UiConfig = Partial<UiTooltipConfig>;

const props = defineProps({
  text: String,
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
const ui = computed<UiConfig>(() => defu({}, props.ui, appConfig.ui.tooltip));

const floating = computed<UseFloatingOptions>(() =>
  defu(
    {},
    props.floating,
    ui.value.floating as UseFloatingOptions,
    {
      placement: props.placement,
      whileElementsMounted: autoUpdate,
      middleware: [offset(props.offset), shift({ padding: 8 }), flip()],
    } as UseFloatingOptions
  )
);

const triggerRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);

const { floatingStyles, update } = useFloating(
  triggerRef,
  containerRef,
  floating.value
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
    :class="ui.wrapper"
    @blur="hideTooltip"
    @focus="showTooltip"
    @mouseover="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot :open="open">Hover</slot>

    <div
      ref="containerRef"
      v-if="open && !prevent"
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
