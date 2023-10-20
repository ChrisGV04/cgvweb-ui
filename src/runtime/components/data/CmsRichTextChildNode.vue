<script lang="ts">
import type { PropType, VNode, VNodeArrayChildren } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    child: {
      type: [String, Number, Boolean, Object, Function] as PropType<
        string | number | boolean | VNode | VNodeArrayChildren | (() => any)
      >,
      required: true,
    },
  },
});
</script>

<template>
  <template v-if="['string', 'number', 'boolean'].includes(typeof child)">{{
    child
  }}</template>

  <component :is="child as any" v-else />
</template>
