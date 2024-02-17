<script setup lang="ts">
import { NuxtLink } from '#components';
import { createError, useRoute } from '#imports';
import type { LinkProps } from '#ui/types';
import { getNuxtLinkProps } from '#ui/utils/links';
import { useLink } from '#vue-router';
import { isEqual } from 'ohash';
import { useForwardProps } from 'radix-vue';
import { computed, withDefaults } from 'vue';

const props = withDefaults(defineProps<LinkProps>(), {
  exact: false,
  exactQuery: false,
  exactHash: false,
  to: () => undefined as LinkProps['to'],
});

if (props.to === undefined) throw createError({ fatal: true, message: 'Missing "to" in link' });

const currentRoute = useRoute();
const { isActive, isExactActive, route } = useLink(props);

const linkStatus = computed<'active' | 'inactive' | 'exact'>(() => {
  if (props.exactQuery && !isEqual(route.value.query, currentRoute.query)) return 'inactive';
  if (props.exactHash && route.value.hash !== currentRoute.hash) return 'inactive';
  if (props.exact && isExactActive.value) return 'exact';
  return isActive.value ? 'active' : 'inactive';
});

const linkProps = useForwardProps(() => getNuxtLinkProps(props));
</script>

<template>
  <NuxtLink
    v-bind="linkProps"
    :data-status="linkStatus"
    :data-active="linkStatus !== 'inactive' ? '' : undefined"
    :data-inactive="linkStatus === 'inactive' ? '' : undefined"
  >
    <slot :status="linkStatus" />
  </NuxtLink>
</template>
