import { NuxtLink } from "#components";
import { useRoute } from "#imports";
import { isEqual } from "lodash-es";
import { defineComponent, h, type PropType } from "vue";
import type { RouteLocationNormalized } from "vue-router";
import { classNames } from "../../utils";

type NuxtLinkProps = InstanceType<typeof NuxtLink>["$props"];
type Props = NuxtLinkProps & {
  type?: HTMLButtonElement["type"];
  disabled?: boolean;
  exact?: boolean;
  exactQuery?: boolean;
  exactHash?: boolean;
  inactiveClass?: string;
};

export default defineComponent<Props>({
  inheritAttrs: false,

  components: { NuxtLink },

  props: {
    ...NuxtLink.props,
    type: {
      type: String as PropType<HTMLButtonElement["type"]>,
      default: null,
    },
    disabled: { type: Boolean, default: false },
    exact: { type: Boolean, default: false },
    exactQuery: { type: Boolean, default: false },
    exactHash: { type: Boolean, default: false },
    inactiveClass: { type: String, default: undefined },
  },

  setup({ custom, ...props }, ctx) {
    const $route = useRoute();

    function resolveLinkClass(
      route: RouteLocationNormalized,
      { isActive, isExactActive }: { isActive: boolean; isExactActive: boolean }
    ): string | undefined {
      if (props.exactQuery && !isEqual(route.query, $route.query))
        return classNames(props.inactiveClass, ctx.attrs.class as any);

      if (props.exactHash && route.hash !== $route.hash)
        return classNames(props.inactiveClass, ctx.attrs.class as any);

      if (props.exact && isExactActive)
        return classNames(props.activeClass, ctx.attrs.class as any);

      if (!props.exact && isActive)
        return classNames(props.activeClass, ctx.attrs.class as any);

      return classNames(props.inactiveClass, ctx.attrs.class as any);
    }

    return () =>
      !props.to
        ? h(
            "button",
            {
              ...ctx.attrs,
              type: props.type,
              disabled: props.disabled,
              class: classNames(props.inactiveClass, ctx.attrs.class as any),
            },
            ctx.slots
          )
        : h(
            NuxtLink,
            { custom: true, ...props },
            {
              default: ({
                route,
                href,
                target,
                rel,
                navigate,
                isActive,
                isExactActive,
                isExternal,
              }) =>
                h(
                  "a",
                  {
                    ...ctx.attrs,
                    rel,
                    target,
                    href: props.disabled ? undefined : href,
                    role: props.disabled ? undefined : "link",
                    onClick: (e) => !isExternal && navigate(e),
                    ariaDisabled: props.disabled ? "true" : undefined,
                    class: resolveLinkClass(route, { isActive, isExactActive }),
                  },
                  ctx.slots.default({
                    isActive: props.exact ? isExactActive : isActive,
                  })
                ),
            }
          );
  },
});
