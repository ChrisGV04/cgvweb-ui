import type { ComboboxContentProps, ComboboxRootProps } from 'radix-vue';

export interface ComboboxItem {
  value: any;
  label: string;
  disabled?: boolean;
}

export type ComboboxOptions = Record<string, ComboboxItem[]> | ComboboxItem[];

export interface ComboboxProps<UiConfig = any> {
  name: string;
  label?: string;
  message?: string;
  emptyMsg?: string;
  placeholder?: string;
  searchPlaceholder?: string;

  error?: boolean;
  multiple?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  mandatory?: boolean;

  prefixIcon?: string;
  prefixText?: string;
  suffixIcon?: string;

  searchIcon?: string;
  loadingIcon?: string;
  indicatorIcon?: string;

  class?: any;
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
