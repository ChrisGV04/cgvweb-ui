<script setup lang="ts">
// @ts-expect-error This import only exists after build
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { formRadioGroupItem } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import omit from 'just-omit';
import { RadioGroupIndicator, RadioGroupItem, useForwardProps, type RadioGroupItemProps } from 'radix-vue';
import { twJoin, twMerge } from 'tailwind-merge';
import { computed, toRef, withDefaults } from 'vue';

const config = mergeConfig<typeof formRadioGroupItem>(
  appConfig.ui?.formRadioGroupItem?.strategy,
  appConfig.ui?.formRadioGroupItem,
  formRadioGroupItem,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };
type Props = RadioGroupItemProps & { class?: any; ui?: UiConfig };

const props = withDefaults(defineProps<Props>(), { class: undefined, ui: () => ({}) as UiConfig });

const { ui } = useUI('formRadioGroupItem', toRef(props, 'ui'), config);

const delegatedProps = computed(() => {
  return omit(props, ['class', 'ui']);
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="twMerge(twJoin(ui.base, ui.size, ui.color, ui.ring), props.class)"
  >
    <RadioGroupIndicator :class="ui.indicator.base">
      <svg viewBox="0 0 6 6" aria-hidden="true" fill="currentColor" :class="ui.indicator.circle">
        <circle cx="3" cy="3" r="3" />
      </svg>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
