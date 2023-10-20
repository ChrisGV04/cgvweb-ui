<script lang="ts">
import { twJoin, twMerge } from "tailwind-merge";
import type { PropType } from "vue";
import { computed, defineComponent, toRef } from "vue";
import { useUI } from "../../composables/useUI";
import type {
  Button,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  Strategy,
} from "../../types";
import { button } from "../../ui.config";
import { mergeConfig } from "../../utils";
import UiIcon from "../elements/Icon.vue";
import UiLink from "../elements/Link.vue";
// @ts-expect-error
import appConfig from "#build/app.config";

const config = mergeConfig<typeof button>(
  appConfig.ui.strategy,
  appConfig.ui.button,
  button,
);

// @ts-ignore
export default defineComponent<Button>({
  components: { UiIcon, UiLink },
  inheritAttrs: false,
  props: {
    label: { type: String, default: undefined },
    leadingIcon: { type: String, default: undefined },
    trailingIcon: { type: String, default: undefined },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    truncate: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    padded: { type: Boolean, default: true },
    type: {
      type: String as PropType<HTMLButtonElement["type"]>,
      default: "button",
      validator: (value: string) =>
        ["submit", "button", "reset"].includes(value),
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: () => config.default.size,
    },
    color: {
      type: String as PropType<ButtonColor>,
      default: () => config.default.color,
    },
    variant: {
      type: String as PropType<ButtonVariant>,
      default: () => config.default.variant,
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon,
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

  setup(props) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config);

    const buttonClass = computed(() =>
      twMerge(
        twJoin(
          ui.value.base,
          ui.value.font,
          ui.value.rounded,
          ui.value.transition,
          ui.value.size[props.size!],
          ui.value.gap[props.size!],
          props.padded && ui.value.padding[props.size!],
          ui.value.color[props.color!][props.variant!],
          props.block
            ? "w-full flex justify-center items-center"
            : "inline-flex items-center",
        ),
        props.class,
      ),
    );

    const trailingIconName = computed(() => {
      if (props.loading) return props.loadingIcon;
      return props.trailingIcon;
    });

    const leadingIconClass = computed(() =>
      twJoin(ui.value.icon.base, ui.value.icon.size[props.size!]),
    );

    const trailingIconClass = computed(() =>
      twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size!],
        props.loading && "animate-spin",
      ),
    );

    return {
      attrs,
      buttonClass,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
    };
  },
});
</script>

<template>
  <UiLink
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClass"
    v-bind="attrs"
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
        :class="[truncate && 'text-left break-all line-clamp-1']"
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
