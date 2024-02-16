<script lang="ts">
import { useElementBounding, useElementVisibility, useToNumber } from '@vueuse/core';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    speed: { type: [String, Number], default: 20 },
    reverse: { type: Boolean, default: false },
    pause: { type: Boolean, default: false },
  },

  setup(props) {
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
      if (times === Infinity || isNaN(times)) return 1;
      return times;
    });

    const isVisible = useElementVisibility(wrapperRef);

    return { duration, repeat, isVisible, wrapperRef, marqueeRef };
  },
});
</script>

<template>
  <div ref="wrapperRef" class="marquee__wrapper flex select-none overflow-hidden">
    <div
      ref="marqueeRef"
      :class="['marquee__content', (!isVisible || pause) && 'pause', reverse && 'reverse']"
    >
      <slot />
    </div>
    <div
      v-for="i in repeat"
      :key="i"
      aria-hidden="true"
      :class="['marquee__content', (!isVisible || pause) && 'pause', reverse && 'reverse']"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.marquee__content {
  @apply shrink-0;
}

.marquee__content {
  animation: scroll v-bind(duration) linear infinite;
}

.marquee__content.reverse {
  animation-direction: reverse;
}

.marquee__content.pause {
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
