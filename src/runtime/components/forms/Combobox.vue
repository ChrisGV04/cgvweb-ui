<script setup lang="ts">
// @ts-expect-error
import appConfig from '#build/app.config';

import UiIcon from '#ui/components/elements/Icon.vue';
import UiFormField from '#ui/components/forms/FormField.vue';
import { useUI } from '#ui/composables/useUI';
import type { ComboboxItem, ComboboxOptions, ComboboxProps, Strategy } from '#ui/types';
import { combobox } from '#ui/ui.config';
import { mergeConfig } from '#ui/utils';
import { getUiFormFieldProps } from '#ui/utils/forms';
import { useDebounceFn, useToNumber } from '@vueuse/core';
import omit from 'just-omit';
import pick from 'just-pick';
import { useForwardProps, useForwardPropsEmits, type ComboboxRootEmits } from 'radix-vue';
import { Combobox } from 'radix-vue/namespaced';
import { twJoin, twMerge } from 'tailwind-merge';
import { computed, defineOptions, ref, toRef, watch, withDefaults } from 'vue';

const config = mergeConfig<typeof combobox>(
  appConfig.ui?.combobox?.strategy,
  appConfig.ui?.combobox,
  combobox,
);
type UiConfig = Partial<typeof config> & { strategy?: Strategy };

defineOptions({ inheritAttrs: false });
const props = withDefaults(defineProps<ComboboxProps<UiConfig>>(), {
  class: undefined,
  ui: () => ({}) as UiConfig,
  modelValue: undefined,
  emptyMsg: 'No results',
});
const emits = defineEmits<ComboboxRootEmits>();

const { ui } = useUI('combobox', toRef(props, 'ui'), config);

// With config defaults
const numOffset = useToNumber(() => props.offset ?? ui.value.default.offset);
const suffixIcon = computed(() => props.suffixIcon ?? ui.value.default.suffixIcon);
const searchIcon = computed(() => props.searchIcon ?? ui.value.default.searchIcon);
const loadingIcon = computed(() => props.loadingIcon ?? ui.value.default.loadingIcon);
const indicatorIcon = computed(() => props.indicatorIcon ?? ui.value.default.indicatorIcon);
const side = computed(() => props.side ?? ui.value.default.side);
const align = computed(() => props.align ?? ui.value.default.align);

const rootProps = computed(() => pick(props, ['defaultValue', 'disabled', 'multiple', 'name', 'modelValue']));
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

////////////////////////////////
///////// CUSTOM LOGIC /////////
////////////////////////////////

const _term = ref('');
const _loading = ref(false);
const _options = ref<ComboboxOptions>(props.options);

/** Custom filter function that supports loading */
const _runFilterFn = useDebounceFn(async (term: string) => {
  try {
    _loading.value = true;
    const results = await props.filterFn(term);
    _loading.value = false;
    _options.value = results;
  } catch (error) {
    console.warn('(UiCombobox): Error when running filter function:', error);
    return [];
  }
}, 500);

/** Search inside the initial options only */
function defaultFilterFn(term: string) {
  const lowerTerm = term.toLowerCase();
  const _compareFn = (option: ComboboxItem) => option.label.toLowerCase().includes(lowerTerm);

  if (Array.isArray(props.options)) {
    _options.value = props.options.filter(_compareFn);
    return;
  }

  _options.value = {};
  for (const key in props.options) {
    if (Object.prototype.hasOwnProperty.call(props.options, key)) {
      const group = props.options[key];
      const options = group.filter(_compareFn);
      if (options.length) {
        _options.value[key] = options;
      }
    }
  }
}

watch(_term, async (term) => {
  if (!term) {
    _options.value = props.options;
    return;
  }

  if (!props.filterFn) {
    defaultFilterFn(term);
    return;
  }

  await _runFilterFn(term);
});

function findOption(value: any): ComboboxItem | null {
  if (Array.isArray(props.options)) return props.options.find((o) => o.value === value) || null;

  // Options is an object with the options groupped
  for (const key in props.options) {
    const option = props.options[key].find((opt) => opt.value === value);
    if (option) return option;
  }

  return null;
}

const displayValue = computed(() => {
  if (props.displayFn) return props.displayFn(props.modelValue);

  if (Array.isArray(props.modelValue)) {
    if (!props.modelValue?.length) return props.placeholder || '';
    return fullSelection.value.map((v) => v.label).join(', ') || props.placeholder || '';
  }

  if (!props.modelValue) return props.placeholder || '';
  return fullSelection.value[0]?.label || props.modelValue;
});

/** Always store the full option data just in case it's no longer in the options */
const fullSelection = ref<ComboboxItem[]>([]);

watch(
  () => props.modelValue,
  (newSelection) => {
    if (!newSelection) fullSelection.value = [];

    if (Array.isArray(newSelection)) {
      const options: ComboboxItem[] = [];
      for (let idx = 0; idx < newSelection.length; idx++) {
        const s = newSelection[idx];
        const option = findOption(s);
        if (option) options.push(option);
      }

      fullSelection.value = options;
      return;
    }

    const option = findOption(newSelection);
    fullSelection.value = [option];
  },
  { immediate: true, deep: true },
);
</script>

<template>
  <Combobox.Root
    v-model:search-term="_term"
    v-bind="forwarded"
    as="template"
    :display-value="() => ''"
    :filter-function="(v) => v"
  >
    <UiFormField v-bind="fieldProps" :name="props.name">
      <Combobox.Anchor as-child>
        <Combobox.Trigger
          tabindex="0"
          :class="[ui.anchor.base, ui.anchor.rounded, ui.anchor.ring, ui.anchor.border]"
        >
          <slot name="prefix">
            <span v-if="props.prefixText" :class="[ui.anchor.font.addons, 'ml-3']">{{
              props.prefixText
            }}</span>
            <UiIcon v-else-if="props.prefixIcon" :name="props.prefixIcon" :class="[ui.anchor.icon, 'ml-3']" />
          </slot>

          <span :class="[ui.anchor.value.base, ui.anchor.value.padding, ui.anchor.font.value]">
            {{ displayValue }}
          </span>

          <UiIcon :name="suffixIcon" :class="[ui.anchor.icon, 'mr-3']" />
        </Combobox.Trigger>
      </Combobox.Anchor>
    </UiFormField>

    <Combobox.Portal>
      <Combobox.Content
        position="popper"
        :side="side"
        :align="align"
        :side-offset="numOffset"
        :class="[ui.content.base, ui.content.border, ui.content.size, ui.content.transition]"
      >
        <div :class="ui.input.container">
          <UiIcon :name="searchIcon" :class="[ui.input.icon, 'ml-3']" />

          <Combobox.Input
            :id="props.name"
            :name="props.name"
            :placeholder="props.searchPlaceholder"
            :class="[ui.input.base, ui.input.font]"
          />
        </div>

        <Combobox.Viewport
          :class="ui.viewport"
          style="max-height: calc(var(--radix-combobox-content-available-height) - 3rem)"
        >
          <Combobox.Empty as-child>
            <span v-show="!_loading" :class="ui.empty">{{ props.emptyMsg }}</span>
          </Combobox.Empty>

          <div v-if="_loading" :class="ui.loading.base">
            <UiIcon :name="loadingIcon" :class="ui.loading.icon" />
          </div>

          <template v-else-if="Array.isArray(_options)">
            <Combobox.Item
              v-for="option in _options"
              :key="option.value"
              :value="option.value"
              :disabled="option.disabled"
              :class="itemClasses"
            >
              <Combobox.ItemIndicator as-child>
                <UiIcon :name="indicatorIcon" :class="ui.item.indicator" />
              </Combobox.ItemIndicator>

              <span :class="ui.item.label">{{ option.label }}</span>
            </Combobox.Item>
          </template>

          <template v-else>
            <Combobox.Group v-for="(groupOptions, groupName, idx) in _options" :key="`g${idx}:${groupName}`">
              <Combobox.Label :class="ui.group.label">{{ groupName }}</Combobox.Label>

              <Combobox.Item
                v-for="option in groupOptions"
                :key="option.value"
                :value="option.value"
                :disabled="option.disabled"
                :class="itemClasses"
              >
                <Combobox.ItemIndicator as-child>
                  <UiIcon :name="indicatorIcon" :class="ui.item.indicator" />
                </Combobox.ItemIndicator>

                <span :class="ui.item.label">{{ option.label }}</span>
              </Combobox.Item>

              <Combobox.Separator
                v-if="idx < Object.keys(props.options).length - 1"
                :class="ui.group.separator"
              />
            </Combobox.Group>
          </template>
        </Combobox.Viewport>
      </Combobox.Content>
    </Combobox.Portal>
  </Combobox.Root>
</template>
