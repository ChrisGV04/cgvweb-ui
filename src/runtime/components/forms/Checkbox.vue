<script setup lang="ts">
// @ts-expect-error This import only exists after build
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { checkbox } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import omit from 'just-omit';
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue';
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue';
import { twJoin, twMerge } from 'tailwind-merge';
import { computed, toRef, withDefaults } from 'vue';

const config = mergeConfig<typeof checkbox>(
  appConfig.ui?.checkbox?.strategy,
  appConfig.ui?.checkbox,
  checkbox,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };
type Props = CheckboxRootProps & {
  class?: any;
  checkedIcon?: string;
  indeterminateIcon?: string;
  ui?: UiConfig;
};

const props = withDefaults(defineProps<Props>(), { ui: () => ({}) as UiConfig });
const emits = defineEmits<CheckboxRootEmits>();

const { ui } = useUI('checkbox', toRef(props, 'ui'), config);

// With config defaults
const checkedIcon = computed(() => props.checkedIcon ?? ui.value.default.checkedIcon);
const indeterminateIcon = computed(() => props.indeterminateIcon ?? ui.value.default.indeterminateIcon);

const delegatedProps = computed(() => {
  return omit(props, ['class', 'ui', 'checkedIcon', 'indeterminateIcon']);
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <CheckboxRoot v-bind="forwarded" :class="twMerge(twJoin(ui.base, ui.size, ui.bg, ui.ring), props.class)">
    <CheckboxIndicator :class="ui.indicator.base">
      <UiIcon v-if="props.checked === 'indeterminate'" :name="indeterminateIcon" :class="ui.indicator.icon" />
      <UiIcon v-else :name="checkedIcon" :class="ui.indicator.icon" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
