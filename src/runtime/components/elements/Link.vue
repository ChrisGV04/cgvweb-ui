<script lang="ts">
import { isEqual } from "ohash";
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { NuxtLink } from "#components";
import type { Link } from "../../types";

export default defineComponent<Link>({
  inheritAttrs: false,
  props: {
    ...NuxtLink.props,
    as: {
      type: [String, Object] as PropType<any>,
      default: "button",
    },
    disabled: { type: Boolean, default: null },
    active: { type: Boolean, default: false },
    exact: { type: Boolean, default: false },
    exactQuery: { type: Boolean, default: false },
    exactHash: { type: Boolean, default: false },
    inactiveClass: { type: String, default: undefined },
  },
  setup(props) {
    function resolveLinkClass(
      route,
      $route,
      {
        isActive,
        isExactActive,
      }: { isActive: boolean; isExactActive: boolean },
    ) {
      if (props.active) {
        return props.activeClass;
      }

      if (props.exactQuery && !isEqual(route.query, $route.query)) {
        return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }

      if (props.exact && isExactActive) {
        return props.activeClass;
      }

      if (!props.exact && isActive) {
        return props.activeClass;
      }

      return props.inactiveClass;
    }

    return {
      resolveLinkClass,
    };
  },
});
</script>

<template>
  <component
    :is="as"
    v-if="!to"
    v-bind="$attrs"
    :disabled="disabled"
    :class="inactiveClass"
  >
    <slot />
  </component>
  <NuxtLink
    v-else
    v-slot="{
      route,
      href,
      target,
      rel,
      navigate,
      isActive,
      isExactActive,
      isExternal,
    }"
    v-bind="$props"
    custom
  >
    <a
      v-bind="$attrs"
      :href="!disabled ? href : undefined"
      :aria-disabled="disabled ? 'true' : undefined"
      :role="disabled ? 'link' : undefined"
      :rel="rel"
      :target="target"
      :class="resolveLinkClass(route, $route, { isActive, isExactActive })"
      @click="(e) => !isExternal && navigate(e)"
    >
      <slot v-bind="{ isActive: exact ? isExactActive : isActive }" />
    </a>
  </NuxtLink>
</template>
