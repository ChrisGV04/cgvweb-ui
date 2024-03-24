<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import UiIcon from '#ui/components/elements/Icon.vue';
import UiFormField from '#ui/components/forms/FormField.vue';
import { useUI } from '#ui/composables/useUI';
import type { Strategy } from '#ui/types';
import type { FormSelectProps } from '#ui/types/formSelect';
import { formSelect } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { getUiFormFieldProps } from '#ui/utils/forms';
import { useToNumber } from '@vueuse/core';
import omit from 'just-omit';
import pick from 'just-pick';
import { useForwardProps, useForwardPropsEmits, type SelectRootEmits } from 'radix-vue';
import { Select } from 'radix-vue/namespaced';
import { twJoin, twMerge } from 'tailwind-merge';
import { computed, defineOptions, toRef, withDefaults } from 'vue';

const config = mergeConfig<typeof formSelect>(
  appConfig.ui?.formSelect?.strategy,
  appConfig.ui?.formSelect,
  formSelect,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

defineOptions({ inheritAttrs: false });
const props = withDefaults(defineProps<FormSelectProps<UiConfig>>(), {
  class: undefined,
  ui: () => ({}) as UiConfig,
  modelValue: undefined,
});
const emits = defineEmits<SelectRootEmits>();

const { ui, attrs } = useUI('formSelect', toRef(props, 'ui'), config);

// With config defaults
const numOffset = useToNumber(() => props.offset ?? ui.value.default.offset);
const suffixIcon = computed(() => props.suffixIcon ?? ui.value.default.suffixIcon);
const indicatorIcon = computed(() => props.indicatorIcon ?? ui.value.default.indicatorIcon);
const scrollUpIcon = computed(() => props.scrollUpIcon ?? ui.value.default.scrollUpIcon);
const scrollDownIcon = computed(() => props.scrollDownIcon ?? ui.value.default.scrollDownIcon);
const side = computed(() => props.side ?? ui.value.default.side);
const align = computed(() => props.align ?? ui.value.default.align);

const rootProps = computed(() =>
  pick(props, [
    'open',
    'defaultOpen',
    'defaultValue',
    'modelValue',
    'dir',
    'name',
    'autocomplete',
    'disabled',
    'required',
  ]),
);
const forwarded = useForwardPropsEmits(rootProps, emits);

const fieldProps = useForwardProps(() => getUiFormFieldProps(omit(props, ['ui'])));

const itemClasses = computed(() =>
  twMerge(
    twJoin(
      ui.value.item.base,
      ui.value.item.padding,
      ui.value.item.active,
      ui.value.item.inactive,
      ui.value.item.disabled,
    ),
    'group',
  ),
);
</script>

<template>
  <Select.Root v-bind="forwarded">
    <UiFormField v-bind="fieldProps" :name="props.name">
      <Select.Trigger as-child>
        <slot name="trigger">
          <button v-bind="attrs" :class="[ui.trigger.base, ui.trigger.rounded, ui.trigger.ring]">
            <slot name="prefix">
              <span v-if="props.prefixText" :class="[ui.trigger.font.addons, 'ml-3']">{{
                props.prefixText
              }}</span>
              <UiIcon
                v-else-if="props.prefixIcon"
                :name="props.prefixIcon"
                :class="[ui.trigger.icon, 'ml-3']"
              />
            </slot>

            <Select.Value
              :placeholder="props.placeholder"
              :class="[ui.trigger.value.base, ui.trigger.value.padding, ui.trigger.font.value]"
            />

            <UiIcon :name="suffixIcon" :class="[ui.trigger.icon, 'mr-3']" />
          </button>
        </slot>
      </Select.Trigger>
    </UiFormField>

    <Select.Portal>
      <Select.Content
        position="popper"
        :side="side"
        :align="align"
        :side-offset="numOffset"
        :class="[
          ui.content.base,
          ui.content.border,
          ui.content.size,
          ui.content.rounded,
          ui.content.transition,
        ]"
      >
        <Select.ScrollUpButton :class="[ui.scrollButtons.base, ui.scrollButtons.size]">
          <UiIcon :name="scrollUpIcon" :class="ui.scrollButtons.icon" />
        </Select.ScrollUpButton>

        <Select.Viewport
          :class="ui.viewport"
          style="
            max-height: calc(var(--radix-select-content-available-height) - 3rem);
            max-width: calc(var(--radix-select-content-available-width) - 2rem);
          "
        >
          <template v-if="Array.isArray(options)">
            <Select.Item
              v-for="option in options"
              :key="option.value"
              :class="itemClasses"
              :value="option.value"
              :disabled="option.disabled"
            >
              <Select.ItemIndicator as-child>
                <UiIcon :name="indicatorIcon" :class="ui.item.indicator" />
              </Select.ItemIndicator>

              <Select.ItemText :class="ui.item.label">{{ option.label }}</Select.ItemText>
            </Select.Item>
          </template>

          <template v-else>
            <Select.Group v-for="(groupOptions, groupName, idx) in options" :key="`g${idx}:${groupName}`">
              <Select.Label :class="ui.group.label">{{ groupName }}</Select.Label>

              <Select.Item
                v-for="option in groupOptions"
                :key="option.value"
                :class="itemClasses"
                :value="option.value"
                :disabled="option.disabled"
              >
                <Select.ItemIndicator as-child>
                  <UiIcon :name="indicatorIcon" :class="ui.item.indicator" />
                </Select.ItemIndicator>

                <Select.ItemText :class="ui.item.label">{{ option.label }}</Select.ItemText>
              </Select.Item>

              <Select.Separator
                v-if="idx < Object.keys(props.options).length - 1"
                :class="ui.group.separator"
              />
            </Select.Group>
          </template>
        </Select.Viewport>

        <Select.ScrollDownButton :class="[ui.scrollButtons.base, ui.scrollButtons.size]">
          <UiIcon :name="scrollDownIcon" :class="ui.scrollButtons.icon" />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
</template>
