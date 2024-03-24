<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import UiLink from '#ui/components/elements/Link.vue';
import { useUI } from '#ui/composables/useUI';
import type { ButtonProps, Strategy } from '#ui/types';
import { button } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { getUiLinkProps } from '#ui/utils/links';
import { Primitive, useForwardProps } from 'radix-vue';
import { twJoin, twMerge } from 'tailwind-merge';
import { computed, defineOptions, toRef, withDefaults } from 'vue';

const config = mergeConfig<typeof button>(appConfig.ui?.button?.strategy, appConfig.ui?.button, button);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<ButtonProps<UiConfig>>(), {
  as: 'button',
  type: 'button',
  padded: true,
  to: () => undefined as ButtonProps['to'],
  ui: () => ({}) as UiConfig,
});

const { ui, attrs } = useUI('button', toRef(props, 'ui'), config);

// With config defaults
const size = computed(() => props.size ?? ui.value.default.size);
const variant = computed(() => props.variant ?? ui.value.default.variant);
const loadingIcon = computed(() => props.loadingIcon ?? ui.value.default.loadingIcon);

const baseClasses = computed(() =>
  twMerge(
    twJoin(
      ui.value.base,
      ui.value.font,
      ui.value.rounded,
      ui.value.transition,
      ui.value.size[size.value],
      ui.value.gap[size.value],
      props.padded && ui.value.padding[size.value],
      ui.value.variant[variant.value],
    ),
    props.class,
  ),
);

const leftIconClasses = computed(() => twJoin(ui.value.icon.base, ui.value.icon.size[size.value]));
const rightIconClasses = computed(() =>
  twJoin(ui.value.icon.base, ui.value.icon.size[size.value], props.loading && 'animate-spin'),
);

const rightIconName = computed(() => {
  if (props.loading) return loadingIcon.value;
  return props.rightIcon;
});

const linkProps = useForwardProps(() => getUiLinkProps(props));
</script>

<template>
  <Primitive
    v-bind="{ ...attrs, ...linkProps }"
    :type="props.type"
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
