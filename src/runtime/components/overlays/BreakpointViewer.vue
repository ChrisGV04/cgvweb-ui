<script setup lang="ts">
import UiBadge from '#ui/components/elements/Badge.vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { computed, ref } from 'vue';

const bp = useBreakpoints(breakpointsTailwind);
const size = computed(() => bp.current().value.at(-1)?.toUpperCase() || 'XS');
const switchSide = ref(false);
</script>

<template>
  <div class="pointer-events-none fixed inset-x-0 bottom-0 z-[999] flex justify-between p-4">
    <UiBadge color="gray" :class="['pointer-events-auto select-none', !switchSide && 'opacity-0']">{{
      size
    }}</UiBadge>

    <UiBadge
      color="gray"
      :class="['pointer-events-auto select-none', switchSide && 'opacity-0']"
      @pointerenter="switchSide = true"
      @pointerleave="switchSide = false"
      >{{ size }}</UiBadge
    >
  </div>
</template>
