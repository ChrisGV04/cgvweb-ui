<script setup lang="ts">
import type { RadioGroupRootEmits, RadioGroupRootProps } from 'radix-vue';

import { RadioGroupRoot, useForwardPropsEmits } from 'radix-vue';

const props = defineProps<RadioGroupRootProps>();
const emits = defineEmits<RadioGroupRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <RadioGroupRoot v-bind="forwarded">
    <slot />
  </RadioGroupRoot>
</template>
