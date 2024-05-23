<script setup lang="ts">
import type { Strategy } from '#ui/types';
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue';

// @ts-expect-error This import only exists after build
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import { checkbox } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import omit from 'just-omit';
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

const forwarded = useForwardPropsEmits(
  () => omit(props, ['class', 'ui', 'checkedIcon', 'indeterminateIcon']),
  emits,
);
</script>

<template>
  <CheckboxRoot v-bind="forwarded" :class="twMerge(twJoin(ui.base, ui.size, ui.bg, ui.ring), props.class)">
    <CheckboxIndicator :class="ui.indicator.base">
      <UiIcon v-if="props.checked === 'indeterminate'" :name="indeterminateIcon" :class="ui.indicator.icon" />
      <UiIcon v-else :name="checkedIcon" :class="ui.indicator.icon" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
