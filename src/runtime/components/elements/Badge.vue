<script setup lang="ts">
import { useAppConfig } from "#imports";
import { defu } from "defu";
import { computed, type PropType } from "vue";
import type {
  UiBadgeColors,
  UiBadgeConfig,
  UiBadgeDefaultConfig,
  UiBadgeSizes,
  UiBadgeVariants,
} from "../../types";
import { classNames } from "../../utils";
// @ts-expect-error
import buildAppConfig from "#build/app.config";

type UiConfig = Partial<UiBadgeConfig>;

const props = defineProps({
  dot: Boolean,
  label: String,
  actionIcon: String,
  size: {
    type: String as PropType<UiBadgeSizes>,
    default: (): UiBadgeSizes => buildAppConfig.ui.badge.default.size,
  },
  color: {
    type: String as PropType<UiBadgeColors>,
    default: (): UiBadgeColors => buildAppConfig.ui.badge.default.color,
  },
  variant: {
    type: String as PropType<UiBadgeVariants>,
    default: (): UiBadgeVariants => buildAppConfig.ui.badge.default.variant,
  },
  ui: {
    type: Object as PropType<UiConfig>,
    default: (): Partial<UiBadgeDefaultConfig> => buildAppConfig.ui.badge,
  },
});
defineEmits(["click:action"]);

// Merge UI config
const appConfig = useAppConfig();
const ui = computed<UiConfig>(() => defu({}, props.ui, appConfig.ui.badge));

const variant = computed(() => ui.value.color[props.color][props.variant]);

const badgeClass = computed(() =>
  classNames(
    ui.value.base,
    ui.value.font,
    ui.value.rounded,
    ui.value.size[props.size],
    variant.value.base
  )
);
</script>

<template>
  <span :class="badgeClass">
    <svg
      v-if="dot"
      viewBox="0 0 6 6"
      aria-hidden="true"
      fill="currentColor"
      :class="['h-1.5 w-1.5', variant.addons]"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>

    <slot />

    <slot name="action">
      <button
        type="button"
        v-if="props.actionIcon"
        @click="$emit('click:action')"
        :class="[
          variant.action,
          variant.addons,
          'flex h-3.5 w-3.5 -mr-0.5 shrink-0 items-center justify-center rounded-sm',
        ]"
      >
        <UiIcon :name="props.actionIcon" />
      </button>
    </slot>
  </span>
</template>
