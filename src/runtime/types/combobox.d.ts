import type { FormFieldProps } from '#ui/types';
import type { ComboboxContentProps, ComboboxRootProps } from 'radix-vue';

export interface ComboboxItem {
  value: any;
  label: string;
  disabled?: boolean;
}

export type ComboboxOptions = Record<string, ComboboxItem[]> | ComboboxItem[];

export interface ComboboxProps<UiConfig = any> extends Omit<FormFieldProps, 'ui'> {
  emptyMsg?: string;
  placeholder?: string;
  searchPlaceholder?: string;

  multiple?: boolean;

  prefixIcon?: string;
  prefixText?: string;
  suffixIcon?: string;

  searchIcon?: string;
  loadingIcon?: string;
  indicatorIcon?: string;

  ui?: UiConfig;

  options?: ComboboxOptions;
  modelValue?: ComboboxRootProps['modelValue'];
  defaultValue?: ComboboxRootProps['defaultValue'];

  displayFn?: (selection: ComboboxRootProps['modelValue']) => string;
  filterFn?: (term: string) => ComboboxOptions | Promise<ComboboxOptions>;

  offset?: number | string;
  align?: ComboboxContentProps['align'];
  side?: ComboboxContentProps['side'];
}
