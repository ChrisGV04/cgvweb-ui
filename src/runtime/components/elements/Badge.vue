<script lang="ts">
import { twJoin, twMerge } from "tailwind-merge";
import type { PropType } from "vue";
import { computed, defineComponent, toRef } from "vue";
import { useUI } from "../../composables/useUI";
import type { BadgeColor, BadgeSize, BadgeVariant, Strategy } from "../../types";
import { badge } from "../../ui.config";
import { mergeConfig } from "../../utils";
import UiIcon from "./Icon.vue";
// @ts-expect-error
import appConfig from "#build/app.config";

const config = mergeConfig<typeof badge>(
  appConfig.ui.strategy,
  appConfig.ui.badge,
  badge,
);

export default defineComponent({
  components: { UiIcon },
  inheritAttrs: false,
  props: {
    dot: Boolean,
    actionIcon: { type: String, default: null },
    label: { type: [String, Number], default: null },
    size: {
      type: String as PropType<BadgeSize>,
      default: () => config.default.size,
    },
    color: {
      type: String as PropType<BadgeColor>,
      default: () => config.default.color,
    },
    variant: {
      type: String as PropType<BadgeVariant>,
      default: () => config.default.variant,
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
  emits: ["click:action"],

  setup(props) {
    const { ui, attrs } = useUI("badge", toRef(props, "ui"), config);

    const activeVariant = computed(
      () => ui.value.color[props.color][props.variant],
    );

    const badgeClass = computed(() => {
      return twMerge(
        twJoin(
          ui.value.base,
          ui.value.font,
          ui.value.rounded,
          ui.value.size[props.size],
          activeVariant.value.base,
        ),
        props.class,
      );
    });

    return { attrs, activeVariant, badgeClass };
  },
});
</script>

<template>
  <span :class="badgeClass" v-bind="attrs">
    <svg
      v-if="dot"
      viewBox="0 0 6 6"
      aria-hidden="true"
      fill="currentColor"
      :class="['h-1.5 w-1.5', activeVariant.addons]"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>

    <slot />

    <slot name="action">
      <button
        v-if="actionIcon"
        type="button"
        :class="[
          activeVariant.action,
          activeVariant.addons,
          'flex h-3.5 w-3.5 -mr-0.5 shrink-0 items-center justify-center rounded-sm',
        ]"
        @click="$emit('click:action')"
      >
        <UiIcon :name="actionIcon" />
      </button>
    </slot>
  </span>
</template>
