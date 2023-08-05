import type { NuxtLinkProps } from "#app/components";
import type { RouteLocationRaw } from "vue-router";

export const NuxtLinkPropsWithDefaults = {
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
 * @returns Object containing only NuxtLinkProps
 */
export function extractNuxtLinkProps(input: object) {
  const knownProps = [
    "to",
    "href",
    "replace",
    "target",
    "rel",
    "noRel",
    "prefetch",
    "noPrefetch",
    "activeClass",
    "exactActiveClass",
    "ariaCurrentValue",
  ];

  return knownProps.reduce((result, propName) => {
    result[propName] = input[propName] ?? undefined;
    return result;
  }, {} as NuxtLinkProps);
}
