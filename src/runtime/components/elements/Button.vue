<script setup lang="ts">
import { useAppConfig } from "#imports";
import { defu } from "defu";
import { computed, type PropType } from "vue";
import type {
  UiButtonColors,
  UiButtonConfig,
  UiButtonSizes,
  UiButtonVariants,
} from "../../types";
import { classNames } from "../../utils";
import UiIcon from "./Icon.vue";
import UiLink from "./Link.vue";
// @ts-expect-error
import buildAppConfig from "#build/app.config";
import { extractUiLinkProps, UiLinkProps } from "../../utils/link";

type UiConfig = Partial<UiButtonConfig>;

const props = defineProps({
  ...UiLinkProps,
  label: String,
  leadingIcon: String,
  trailingIcon: String,
  type: {
    type: String as PropType<HTMLButtonElement["type"]>,
    default: "button",
  },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  truncate: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  padded: { type: Boolean, default: true },
  size: {
    type: String as PropType<UiButtonSizes>,
    default: (): UiButtonSizes => buildAppConfig.ui.button.default.size,
  },
  color: {
    type: String as PropType<UiButtonColors>,
    default: (): UiButtonColors => buildAppConfig.ui.button.default.color,
  },
  variant: {
    type: String as PropType<UiButtonVariants>,
    default: (): UiButtonVariants => buildAppConfig.ui.button.default.variant,
  },
  loadingIcon: {
    type: String,
    default: () => buildAppConfig.ui.button.default.loadingIcon,
  },
  ui: {
    type: Object as PropType<UiConfig>,
    default: (): UiConfig => buildAppConfig.ui.button,
  },
});

// Merge UI config
const appConfig = useAppConfig();
const ui = computed<UiConfig>(() => defu({}, props.ui, appConfig.ui.button));

const buttonClass = computed(() =>
  classNames(
    ui.value.base,
    ui.value.font,
    ui.value.rounded,
    ui.value.transition,
    ui.value.size[props.size],
    ui.value.gap[props.size],
    props.padded && ui.value.padding[props.size],
    ui.value.color[props.color][props.variant],
    props.block ? "w-full flex justify-center" : "inline-flex"
  )
);

const trailingIconName = computed(() => {
  if (props.loading) return props.loadingIcon;
  return props.trailingIcon;
});

const leadingIconClass = computed(() =>
  classNames(ui.value.icon.base, ui.value.icon.size[props.size])
);

const trailingIconClass = computed(() =>
  classNames(
    ui.value.icon.base,
    ui.value.icon.size[props.size],
    props.loading && "animate-spin"
  )
);
</script>

<template>
  <UiLink
    :type="type"
    :class="buttonClass"
    :disabled="disabled || loading"
    v-bind="extractUiLinkProps($props)"
  >
    <slot name="leading" :disabled="disabled" :loading="loading">
      <UiIcon
        v-if="leadingIcon"
        :name="leadingIcon"
        :class="leadingIconClass"
      />
    </slot>

    <slot>
      <span
        v-if="label"
        :class="truncate && 'text-left break-all line-clamp-1'"
      >
        {{ label }}
      </span>
    </slot>

    <slot name="trailing" :disabled="disabled" :loading="loading">
      <UiIcon
        v-if="trailingIconName"
        :name="trailingIconName"
        :class="trailingIconClass"
      />
    </slot>
  </UiLink>
</template>
