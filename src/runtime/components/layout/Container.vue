<script lang="ts">
import { twJoin, twMerge } from "tailwind-merge";
import type { PropType } from "vue";
import { computed, defineComponent, toRef } from "vue";
import { useUI } from "../../composables/useUI";
import type { Strategy } from "../../types";
import { container } from "../../ui.config";
import { mergeConfig } from "../../utils";
// @ts-expect-error
import appConfig from "#build/app.config";

const config = mergeConfig<typeof container>(
  appConfig.ui.strategy,
  appConfig.ui.container,
  container,
);

export default defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div",
    },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: undefined,
    },
    ui: {
      type: Object as PropType<
        Partial<typeof config & { strategy?: Strategy }>
      >,
      default: undefined,
    },
  },
  setup(props) {
    const { ui, attrs } = useUI("container", toRef(props, "ui"), config);

    const containerClass = computed(() => {
      return twMerge(
        twJoin(
          ui.value.base,
          ui.value.xPadding,
          ui.value.yPadding,
          ui.value.constrained,
        ),
        props.class,
      );
    });

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      containerClass,
    };
  },
});
</script>

<template>
  <component :is="as" :class="containerClass" v-bind="attrs">
    <slot />
  </component>
</template>
