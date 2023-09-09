import { NuxtLink } from "#components";
import { useRoute } from "#imports";
import { omit } from "lodash-es";
import { twJoin, twMerge } from "tailwind-merge";
import { defineComponent, h, type PropType } from "vue";
import type { RouteLocationNormalized, RouteLocationRaw } from "vue-router";
import { isDeepEqual } from "../../utils";

type Props = {
  // NuxtLink props
  to?: RouteLocationRaw;
  href?: RouteLocationRaw;
  external?: boolean;
  replace?: boolean;
  custom?: boolean;
  target?: "_blank" | "_parent" | "_self" | "_top" | (string & {}) | null;
  rel?: string | null;
  noRel?: boolean;
  prefetch?: boolean;
  noPrefetch?: boolean;
  activeClass?: string;
  exactActiveClass?: string;
  ariaCurrentValue?: string;

  // UiLink props
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
      if (props.exactQuery && !isDeepEqual(route.query, $route.query))
        return twJoin(props.inactiveClass, ctx.attrs.class as any);

      if (props.exactHash && route.hash !== $route.hash)
        return twJoin(props.inactiveClass, ctx.attrs.class as any);

      if (props.exact && isExactActive)
        return twJoin(props.activeClass, ctx.attrs.class as any);

      if (!props.exact && isActive)
        return twJoin(props.activeClass, ctx.attrs.class as any);

      return twJoin(props.inactiveClass, ctx.attrs.class as any);
    }

    return () =>
      !props.to
        ? h(
            "button",
            {
              ...omit(ctx.attrs, ["class"]),
              type: props.type,
              disabled: props.disabled,
              class: twMerge(props.inactiveClass, ctx.attrs.class as any),
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
                    ...omit(ctx.attrs, ["class"]),
                    rel,
                    target,
                    href: props.disabled ? undefined : href,
                    role: props.disabled ? undefined : "link",
                    onClick: (e) => {
                      !isExternal && navigate(e);
                      ctx.emit("click", e);
                    },
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
