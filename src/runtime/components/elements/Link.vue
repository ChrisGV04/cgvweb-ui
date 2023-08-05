<script setup lang="ts">
import { NuxtLink } from "#components";
import { useRoute } from "#imports";
import { isEqual } from "lodash-es";
import type { RouteLocationNormalized } from "vue-router";
import {
  NuxtLinkPropsWithDefaults,
  extractNuxtLinkProps,
} from "../../utils/link";

defineOptions({ inheritAttrs: false });

const props = defineProps({
  ...NuxtLinkPropsWithDefaults,
  type: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  exact: { type: Boolean, default: false },
  exactQuery: { type: Boolean, default: false },
  exactHash: { type: Boolean, default: false },
  inactiveClass: { type: String, default: "" },
});

const linkProps = extractNuxtLinkProps(props);

interface ResolverInput {
  isActive: boolean;
  isExactActive: boolean;
}

function resolveLinkClass(
  route: RouteLocationNormalized,
  { isActive, isExactActive }: ResolverInput
) {
  if (props.exactQuery && !isEqual(route.query, useRoute().query)) {
    return props.inactiveClass;
  }
  if (props.exactHash && route.hash !== useRoute().hash) {
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
</script>

<template>
  <button
    v-if="!to"
    v-bind="$attrs"
    :disabled="disabled"
    :class="inactiveClass"
  >
    <slot />
  </button>

  <NuxtLink
    v-else
    custom
    v-bind="linkProps"
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
      :class="resolveLinkClass(route, { isActive, isExactActive })"
    >
      <slot :is-active="exact ? isExactActive : isActive" />
    </a>
  </NuxtLink>
</template>
