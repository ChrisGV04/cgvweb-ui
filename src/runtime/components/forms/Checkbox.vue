<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { checkbox } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';

const config = mergeConfig<typeof checkbox>(
  appConfig.ui?.checkbox?.strategy,
  appConfig.ui?.checkbox,
  checkbox,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };
</script>

<script setup lang="ts">
import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import omit from 'just-omit';
import {
  CheckboxIndicator,
  CheckboxRoot,
  useForwardPropsEmits,
  type CheckboxRootEmits,
  type CheckboxRootProps,
} from 'radix-vue';
import { twJoin, twMerge } from 'tailwind-merge';
import { computed, toRef, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<
    CheckboxRootProps & { class?: any; checkedIcon?: string; indeterminateIcon?: string; ui?: UiConfig }
  >(),
  {
    class: undefined,
    ui: () => ({}) as UiConfig,
    checkedIcon: () => config.default.checkedIcon,
    indeterminateIcon: () => config.default.indeterminateIcon,
  },
);

const emits = defineEmits<CheckboxRootEmits>();

const { ui } = useUI('checkbox', toRef(props, 'ui'), config);

const delegatedProps = computed(() => {
  return omit(props, ['class', 'ui', 'checkedIcon', 'indeterminateIcon']);
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <CheckboxRoot v-bind="forwarded" :class="twMerge(twJoin(ui.base, ui.size, ui.bg, ui.ring), props.class)">
    <CheckboxIndicator :class="ui.indicator.base">
      <UiIcon
        v-if="props.checked === 'indeterminate'"
        :name="props.indeterminateIcon"
        :class="ui.indicator.icon"
      />
      <UiIcon v-else :name="props.checkedIcon" :class="ui.indicator.icon" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
