<script setup lang="ts">
import { useAppConfig, useAttrs } from "#imports";
import omit from "just-omit";
import { twJoin, twMerge } from "tailwind-merge";
import { computed, type PropType } from "vue";
import type {
  UiBadgeColors,
  UiBadgeConfig,
  UiBadgeDefaultConfig,
  UiBadgeSizes,
  UiBadgeVariants,
} from "../../types";
import { defuTwMerge } from "../../utils";
import UiIcon from "./Icon.vue";
// @ts-expect-error
import buildAppConfig from "#build/app.config";

type UiConfig = Partial<UiBadgeConfig>;

defineOptions({ inheritAttrs: false });

const props = defineProps({
  dot: Boolean,
  label: { type: String, default: undefined },
  actionIcon: { type: String, default: undefined },
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

const attrs = useAttrs();

// Merge UI config
const appConfig = useAppConfig();
const ui = computed<UiBadgeConfig>(() =>
  defuTwMerge({}, props.ui, appConfig.ui.badge),
);

const variant = computed(() => ui.value.color[props.color][props.variant]);

const badgeClass = computed(() =>
  twMerge(
    twJoin(
      ui.value.base,
      ui.value.font,
      ui.value.rounded,
      ui.value.size[props.size],
      variant.value.base,
    ),
    attrs.class as string,
  ),
);
</script>

<template>
  <span :class="badgeClass" v-bind="omit(attrs, ['class'])">
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
        v-if="props.actionIcon"
        type="button"
        :class="[
          variant.action,
          variant.addons,
          'flex h-3.5 w-3.5 -mr-0.5 shrink-0 items-center justify-center rounded-sm',
        ]"
        @click="$emit('click:action')"
      >
        <UiIcon :name="props.actionIcon" />
      </button>
    </slot>
  </span>
</template>
