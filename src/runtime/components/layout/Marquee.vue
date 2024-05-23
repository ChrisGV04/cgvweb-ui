<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue';

import { useElementBounding, useElementVisibility, useToNumber } from '@vueuse/core';
import { Primitive } from 'radix-vue';
import { computed, ref, withDefaults } from 'vue';

type Props = PrimitiveProps & { speed?: string | number; reverse?: boolean; pause?: boolean };
const props = withDefaults(defineProps<Props>(), { as: 'div', speed: 20 });

const wrapperRef = ref<HTMLElement | null>(null);
const marqueeRef = ref<HTMLElement | null>(null);

const numSpeed = useToNumber(props.speed);

const { width: wrapperWidth } = useElementBounding(wrapperRef);
const { width: marqueeWidth } = useElementBounding(marqueeRef);

const duration = computed(
  () =>
    `${
      marqueeWidth.value < wrapperWidth.value
        ? wrapperWidth.value / numSpeed.value
        : marqueeWidth.value / numSpeed.value
    }s`,
);

const repeat = computed(() => {
  const times = Math.ceil(wrapperWidth.value / marqueeWidth.value);
  if (times === Number.POSITIVE_INFINITY || Number.isNaN(times)) return 1;
  return times;
});

const isVisible = useElementVisibility(wrapperRef);
</script>

<template>
  <Primitive
    ref="wrapperRef"
    :as="props.as"
    :as-child="props.asChild"
    :data-direction="reverse ? 'reverse' : 'forward'"
    :data-paused="!isVisible || pause ? '' : undefined"
    class="marquee__wrapper flex select-none overflow-hidden"
  >
    <div ref="marqueeRef" class="marquee__content">
      <slot />
    </div>
    <div v-for="i in repeat" :key="i" aria-hidden="true" class="marquee__content">
      <slot />
    </div>
  </Primitive>
</template>

<style scoped>
.marquee__content {
  @apply shrink-0;
}

.marquee__content {
  animation: scroll v-bind(duration) linear infinite;
}

.marquee__wrapper[data-direction='reverse'] .marquee__content {
  animation-direction: reverse;
}

.marquee__wrapper[data-paused] .marquee__content {
  animation-play-state: paused;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>
