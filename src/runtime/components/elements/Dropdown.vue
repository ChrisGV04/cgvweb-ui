<script lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import { dropdown } from '#ui/ui.config';
import { useUI } from '../../composables/useUI';
import { mergeConfig } from '../../utils';

const config = mergeConfig<typeof dropdown>(appConfig.ui.strategy, appConfig.ui.dropdown, dropdown);
</script>

<script setup lang="ts">
import { navigateTo } from '#imports';
import { useToNumber, useVModel } from '@vueuse/core';
import type { DropdownMenuContentProps } from 'radix-vue';
import { DropdownMenu } from 'radix-vue/namespaced';
import { twJoin, twMerge } from 'tailwind-merge';
import type { PropType } from 'vue';
import { defineOptions, toRef } from 'vue';
import type { DropdownItem, Strategy } from '../../types';
import UiButton from './Button.vue';
import UiIcon from './Icon.vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  defaultOpen: Boolean,
  label: { type: String, default: undefined },
  open: { type: Boolean, default: undefined }, // v-model:open To use as controlled component
  disabled: { type: Boolean, default: false },
  offset: {
    type: [Number, String],
    default: () => config.default.offset,
  },
  align: {
    type: String as PropType<DropdownMenuContentProps['align']>,
    default: () => config.default.align,
    validate: (value) => ['start', 'center', 'end'].includes(value),
  },
  side: {
    type: String as PropType<DropdownMenuContentProps['side']>,
    default: () => config.default.side,
    validate: (value) => ['top', 'right', 'bottom', 'left'].includes(value),
  },
  items: {
    type: Array as PropType<DropdownItem[][]>,
    default: () => [],
  },
  ui: {
    type: Object as PropType<Partial<typeof config> & { strategy?: Strategy }>,
    default: () => ({}),
  },
});
const emits = defineEmits({ 'update:open': (value: boolean) => true });

const $open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as any,
});

const { ui } = useUI('dropdown', toRef(props, 'ui'), config);
const numOffset = useToNumber(props.offset);

function onClick(item: DropdownItem) {
  if (item.click) item.click();

  // TODO: Try to use an actual NuxtLink to support every link property
  const linkPath = item.to || item.href || undefined;
  if (linkPath === undefined) return;
  navigateTo(linkPath, { external: item.external, replace: item.replace });
}
</script>

<template>
  <DropdownMenu.Root v-model:open="$open">
    <DropdownMenu.Trigger as-child :disabled="disabled">
      <slot>
        <UiButton label="Open" />
      </slot>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content
        :side="side"
        :align="align"
        :side-offset="numOffset"
        :class="twMerge(ui.container, ui.border, ui.size, ui.padding, ui.transition)"
      >
        <slot name="head">
          <template v-if="label">
            <DropdownMenu.Label :class="twMerge(ui.label.base, ui.label.font)">{{
              label
            }}</DropdownMenu.Label>
            <DropdownMenu.Separator :class="ui.separator" />
          </template>
        </slot>

        <template v-for="(group, groupIndex) in items" :key="groupIndex">
          <DropdownMenu.Group>
            <DropdownMenu.Item
              v-for="(item, itemIndex) in group"
              :key="`${groupIndex}:${itemIndex}`"
              :disabled="item.disabled"
              :class="
                twMerge(
                  twJoin(ui.item.base, ui.item.padding, ui.item.active, ui.item.inactive, ui.item.disabled),
                  item.class,
                  'group',
                )
              "
              @select="() => onClick(item)"
            >
              <UiIcon v-if="item.icon" :name="item.icon" :class="twMerge(ui.item.icon, item.iconClass)" />
              <span :class="twMerge(ui.item.label, item.labelClass)">{{ item.label }}</span>
            </DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator v-if="groupIndex < items.length - 1" :class="ui.separator" />
        </template>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
</template>
