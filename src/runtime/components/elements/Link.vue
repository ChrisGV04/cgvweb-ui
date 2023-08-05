<script lang="ts">
import { NuxtLink } from "#components";
import { isEqual } from "lodash-es";
import { defineComponent } from "vue";
import type { RouteLocationNormalized } from "vue-router";
import { UiLinkProps } from "../../utils/link";

export default defineComponent({
  inheritAttrs: false,
  props: UiLinkProps,
  setup(props) {
    function resolveLinkClass(
      route: RouteLocationNormalized,
      $route: RouteLocationNormalized,
      { isActive, isExactActive }: { isActive: boolean; isExactActive: boolean }
    ): string | undefined {
      if (props.exactQuery && !isEqual(route.query, $route.query))
        return props.inactiveClass;

      if (props.exactHash && route.hash !== $route.hash)
        return props.inactiveClass;

      if (props.exact && isExactActive) return props.activeClass;

      if (!props.exact && isActive) return props.activeClass;

      return props.inactiveClass;
    }

    return {
      resolveLinkClass,
    };
  },
});
</script>

<template>
  <button
    v-if="!to"
    :type="type"
    v-bind="$attrs"
    :disabled="disabled"
    :class="inactiveClass"
  >
    <slot />
  </button>

  <NuxtLink
    v-else
    custom
    v-bind="$props"
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
  >
    <a
      :rel="rel"
      v-bind="$attrs"
      :target="target"
      :href="!disabled ? href : undefined"
      :role="disabled ? 'link' : undefined"
      @click="(e) => !isExternal && navigate(e)"
      :aria-disabled="disabled ? 'true' : undefined"
      :class="resolveLinkClass(route, $route, { isActive, isExactActive })"
    >
      <slot :is-active="exact ? isExactActive : isActive" />
    </a>
  </NuxtLink>
</template>
