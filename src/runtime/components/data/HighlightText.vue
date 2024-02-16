<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: { type: String, required: true },
    as: {
      type: [String, Object] as PropType<any>,
      default: "span",
    },
    finderRegex: {
      type: RegExp,
      default: () => /\[(.*?)\]/g,
    },
  },
});
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
