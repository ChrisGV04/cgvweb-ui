<script lang="ts">
import {
  breakpointsTailwind,
  computedEager,
  useBreakpoints,
} from "@vueuse/core";
import { defineComponent, ref } from "vue";
import UiBadge from "../elements/Badge.vue";

export default defineComponent({
  components: { UiBadge },
  setup() {
    const bp = useBreakpoints(breakpointsTailwind);
    const size = computedEager(
      () => bp.current().value.at(-1)?.toUpperCase() || "XS",
    );
    const switchSide = ref(false);

    return { size, switchSide };
  },
});
</script>

<template>
  <div
    class="pointer-events-none fixed inset-x-0 bottom-0 z-[999] flex justify-between p-4"
  >
    <UiBadge
      color="gray"
      :class="['pointer-events-auto select-none', !switchSide && 'opacity-0']"
      >{{ size }}</UiBadge
    >

    <UiBadge
      color="gray"
      :class="['pointer-events-auto select-none', switchSide && 'opacity-0']"
      @pointerenter="switchSide = true"
      @pointerleave="switchSide = false"
      >{{ size }}</UiBadge
    >
  </div>
</template>
