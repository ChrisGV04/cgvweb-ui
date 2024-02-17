<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { mergeConfig } from '#ui/utils';
import { button } from '../../ui.config';

const config = mergeConfig<typeof button>(appConfig.ui.strategy, appConfig.ui.button, button);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };
</script>

<script setup lang="ts">
import UiLink from '#ui/components/elements/Link.vue';
import { useUI } from '#ui/composables/useUI';
import type { ButtonProps, ButtonSize, ButtonVariant, Strategy } from '#ui/types';
import { getUiLinkProps } from '#ui/utils/links';
import { Primitive, useForwardProps } from 'radix-vue';
import { twJoin, twMerge } from 'tailwind-merge';
import { computed, defineOptions, toRef, withDefaults } from 'vue';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<ButtonProps<UiConfig>>(), {
  as: 'button',
  type: 'button',
  padded: true,
  class: undefined,
  label: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  to: () => undefined as ButtonProps['to'],
  size: () => config.default.size as ButtonSize,
  variant: () => config.default.variant as ButtonVariant,
  loadingIcon: () => config.default.loadingIcon,
  ui: () => ({}) as UiConfig,
});

const { ui, attrs } = useUI('button', toRef(props, 'ui'), config);

const baseClasses = computed(() =>
  twMerge(
    twJoin(
      ui.value.base,
      ui.value.font,
      ui.value.rounded,
      ui.value.transition,
      ui.value.size[props.size],
      ui.value.gap[props.size],
      props.padded && ui.value.padding[props.size],
      ui.value.variant[props.variant],
      props.block ? 'w-full flex justify-center items-center' : 'inline-flex items-center',
    ),
    props.class,
  ),
);

const leftIconClasses = computed(() => twJoin(ui.value.icon.base, ui.value.icon.size[props.size]));
const rightIconClasses = computed(() =>
  twJoin(ui.value.icon.base, ui.value.icon.size[props.size], props.loading && 'animate-spin'),
);

const rightIconName = computed(() => {
  if (props.loading) return props.loadingIcon;
  return props.rightIcon;
});

const linkProps = useForwardProps(() => getUiLinkProps(props));
</script>

<template>
  <Primitive
    v-bind="{ ...attrs, ...linkProps }"
    :as-child="asChild"
    :as="props.to ? UiLink : as"
    :class="baseClasses"
    :disabled="disabled || loading"
    :data-disabled="disabled || loading ? '' : undefined"
  >
    <slot name="left" :disabled="disabled" :loading="loading">
      <UiIcon v-if="leftIcon" :name="leftIcon" :class="leftIconClasses" />
    </slot>

    <slot>
      <span v-if="label" :class="[truncate && 'line-clamp-1 break-all text-left']">
        {{ label }}
      </span>
    </slot>

    <slot name="right" :disabled="disabled" :loading="loading">
      <UiIcon v-if="rightIconName" :name="rightIconName" :class="rightIconClasses" />
    </slot>
  </Primitive>
</template>
