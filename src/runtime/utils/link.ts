import type { RouteLocationRaw } from "vue-router";

export type UiLinkPropsType = {
  // UiLink specific
  type?: HTMLButtonElement["type"];
  disabled?: boolean;
  exact?: boolean;
  exactQuery?: boolean;
  exactHash?: boolean;
  inactiveClass?: string;

  // Routing
  to?: RouteLocationRaw;
  href?: RouteLocationRaw;

  // Attributes
  target?: string;
  rel?: string;
  noRel?: string;

  // Prefetching
  prefetch?: boolean;
  noPrefetch?: boolean;

  // Styling
  activeClass?: string;
  prefetchedClass?: string;

  // Vue Router's `<RouterLink>` additional props
  replace?: boolean;
  ariaCurrentValue?: string;
};

export const UiLinkProps = {
  // UiLink specific
  type: {
    type: String as PropType<HTMLButtonElement["type"]>,
    default: null,
  },
  disabled: { type: Boolean, default: false },
  exact: { type: Boolean, default: false },
  exactQuery: { type: Boolean, default: false },
  exactHash: { type: Boolean, default: false },
  inactiveClass: { type: String, default: undefined },

  // Routing
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    default: undefined as RouteLocationRaw,
    required: false,
  },
  href: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    default: undefined as RouteLocationRaw,
    required: false,
  },

  // Attributes
  target: {
    type: String as PropType<string>,
    default: undefined,
    required: false,
  },
  rel: {
    type: String as PropType<string>,
    default: undefined,
    required: false,
  },
  noRel: {
    type: Boolean as PropType<boolean>,
    default: undefined,
    required: false,
  },

  // Prefetching
  prefetch: {
    type: Boolean as PropType<boolean>,
    default: undefined,
    required: false,
  },
  noPrefetch: {
    type: Boolean as PropType<boolean>,
    default: undefined,
    required: false,
  },

  // Styling
  activeClass: {
    type: String as PropType<string>,
    default: "router-link-active",
    required: false,
  },
  prefetchedClass: {
    type: String as PropType<string>,
    default: undefined,
    required: false,
  },

  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean as PropType<boolean>,
    default: undefined,
    required: false,
  },
  ariaCurrentValue: {
    type: String as PropType<string>,
    default: undefined,
    required: false,
  },
};

/**
 * Helper function that only picks valid keys from the NuxtLink component
 *
 * @param input Any props object
 * @returns Object containing only UiLinkProps
 */
export function extractUiLinkProps(input: object): any {
  const knownProps: (keyof UiLinkPropsType)[] = [
    "type",
    "disabled",
    "exact",
    "exactQuery",
    "exactHash",
    "inactiveClass",

    "to",
    "href",
    "target",
    "rel",
    "noRel",
    "prefetch",
    "noPrefetch",
    "activeClass",
    "prefetchedClass",
    "replace",
    "ariaCurrentValue",
  ];

  return knownProps.reduce((result, propName) => {
    // @ts-expect-error
    result[propName] = input[propName] ?? undefined;
    return result;
  }, {} as UiLinkPropsType);
}
