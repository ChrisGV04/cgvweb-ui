<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { BadgeSize, BadgeVariant, Strategy } from '#ui/types';
import { badge } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { twJoin, twMerge } from 'tailwind-merge';
import type { PropType } from 'vue';
import { computed, defineComponent, toRef } from 'vue';
import UiIcon from './Icon.vue';

const config = mergeConfig<typeof badge>(appConfig.ui.strategy, appConfig.ui.badge, badge);

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
    variant: {
      type: String as PropType<BadgeVariant>,
      default: () => config.default.variant,
    },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: undefined,
    },
    ui: {
      type: Object as PropType<Partial<typeof config & { strategy?: Strategy }>>,
      default: undefined,
    },
  },
  emits: ['click:action'],

  setup(props) {
    const { ui, attrs } = useUI('badge', toRef(props, 'ui'), config);

    const activeVariant = computed(() => ui.value.variant[props.variant]);

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
          '-mr-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm',
        ]"
        @click="$emit('click:action')"
      >
        <UiIcon :name="actionIcon" />
      </button>
    </slot>
  </span>
</template>
