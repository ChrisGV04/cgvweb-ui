import { useAppConfig } from "#imports";
import { defu } from "defu";
import { defineComponent, h, type PropType } from "vue";
import type {
  UiButtonColors,
  UiButtonConfig,
  UiButtonSizes,
  UiButtonVariants,
} from "../../types";
import { classNames } from "../../utils";
import { extractUiLinkProps } from "../../utils/link";
import UiIcon from "./Icon.vue";
import UiLink from "./Link";
// @ts-expect-error
import buildAppConfig from "#build/app.config";

type ParentLinkProps = InstanceType<typeof UiLink>["$props"];
type ButtonUiConfig = Partial<UiButtonConfig>;

type Props = ParentLinkProps & {
  label?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  type?: HTMLButtonElement["type"];
  loading?: boolean;
  disabled?: boolean;
  truncate?: boolean;
  block?: boolean;
  padded?: boolean;
  size?: UiButtonSizes;
  color?: UiButtonColors;
  variant?: UiButtonVariants;
  loadingIcon?: string;
  ui?: ButtonUiConfig;
};

export default defineComponent<Props>({
  props: {
    ...UiLink.props,
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
      type: Object as PropType<ButtonUiConfig>,
      default: (): ButtonUiConfig => buildAppConfig.ui.button,
    },
  },

  setup(props, ctx) {
    // Merge UI config
    const appConfig = useAppConfig();
    const ui = computed<ButtonUiConfig>(() =>
      defu({}, props.ui, appConfig.ui.button)
    );

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

    return () =>
      h(
        UiLink,
        {
          ...extractUiLinkProps(props),
          class: buttonClass.value,
          disabled: props.disabled || props.loading,
        },
        () => [
          // Leading slot with default icon
          ctx.slots.leading
            ? ctx.slots.leading({
                disabled: props.disabled,
                loading: props.loading,
              })
            : props.leadingIcon
            ? h(
                UiIcon,
                {
                  name: props.leadingIcon,
                  class: leadingIconClass.value,
                },
                null
              )
            : null,

          // Default slot that renders a span if the slot is not defined
          ctx.slots.default
            ? ctx.slots.default()
            : props.label
            ? h(
                "span",
                {
                  class: props.truncate && "text-left break-all line-clamp-1",
                },
                props.label
              )
            : null,

          // Trailing slot with default icon
          ctx.slots.trailing
            ? ctx.slots.trailing({
                disabled: props.disabled,
                loading: props.loading,
              })
            : trailingIconName.value
            ? h(
                UiIcon,
                {
                  name: trailingIconName.value,
                  class: trailingIconClass.value,
                },
                null
              )
            : null,
        ]
      );
  },
});
