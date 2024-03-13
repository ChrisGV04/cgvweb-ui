<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import { formSwitch } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import omit from 'just-omit';
import {
  SwitchRoot,
  SwitchThumb,
  useForwardPropsEmits,
  type SwitchRootEmits,
  type SwitchRootProps,
} from 'radix-vue';
import { twJoin, twMerge } from 'tailwind-merge';
import { computed, toRef, withDefaults } from 'vue';

const config = mergeConfig<typeof formSwitch>(
  appConfig.ui?.formSwitch?.strategy,
  appConfig.ui?.formSwitch,
  formSwitch,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

const props = withDefaults(defineProps<SwitchRootProps & { class?: any; ui?: UiConfig }>(), {
  class: undefined,
  ui: () => ({}) as UiConfig,
});

const emits = defineEmits<SwitchRootEmits>();

const { ui } = useUI('formSwitch', toRef(props, 'ui'), config);

const delegatedProps = computed(() => {
  return omit(props, ['class', 'ui']);
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="twMerge(twJoin(ui.base, ui.size, ui.ring, ui.bg, ui.transition), props.class)"
  >
    <SwitchThumb :class="twMerge(ui.thumb.base, ui.thumb.size, ui.thumb.transition)" />
  </SwitchRoot>
</template>
