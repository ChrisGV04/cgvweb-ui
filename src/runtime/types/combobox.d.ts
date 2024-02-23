import type { ComboboxContentProps } from 'radix-vue';

export interface ComboboxItem {
  value: any;
  label: string;
  disabled?: boolean;
}

export type ComboboxOptions = Record<string, ComboboxItem[]> | ComboboxItem[];

export interface ComboboxProps<UiConfig = any> {
  name: string;
  label?: string;
  error?: boolean;
  message?: string;
  readOnly?: boolean;
  disabled?: boolean;
  mandatory?: boolean;
  placeholder?: string;
  multiple?: boolean;
  class?: any;
  emptyMsg?: string;

  prefixIcon?: string;
  prefixText?: string;
  suffixText?: string;
  triggerIcon?: string;
  indicatorIcon?: string;
  loadingIcon?: string;

  defaultOpen?: boolean;
  defaultValue?: any;

  offset?: number | string;
  align?: ComboboxContentProps['align'];
  side?: ComboboxContentProps['side'];

  ui?: UiConfig;

  /** Controlled input value */
  modelValue?: any;

  /** Custom filter function  */
  filterFunction?: (term: string) => ComboboxOptions | Promise<ComboboxOptions>;

  /**
   * The initial options that can be selected.
   * If object, the options will be groupped by the key.
   */
  options?: ComboboxOptions;

  // TODO: Implement the function to allow custom values
}
