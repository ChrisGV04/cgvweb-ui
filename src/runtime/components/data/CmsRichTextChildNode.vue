<script setup lang="ts">
import type { VNode, VNodeArrayChildren } from 'vue';

defineProps<{ child: string | number | boolean | VNode | VNodeArrayChildren | (() => any) }>();
</script>

<template>
  <template v-if="['string', 'number', 'boolean'].includes(typeof child)">{{ child }}</template>

  <component :is="child as any" v-else />
</template>
