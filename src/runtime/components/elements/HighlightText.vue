<script setup lang="ts">
withDefaults(
  defineProps<{ as?: string | object; text: string; finderRegex?: RegExp }>(),
  {
    as: "span",
    finderRegex: () => /\[(.*?)\]/g,
  }
);
</script>

<template>
  <component :is="as">
    <template v-for="(content, idx) in text.split(finderRegex)" :key="idx">
      <slot v-if="(idx + 1) % 2 === 0" name="highlights" :content="content">
        <span class="highlight">{{ content }}</span>
      </slot>

      <template v-else>{{ content }}</template>
    </template>
  </component>
</template>
