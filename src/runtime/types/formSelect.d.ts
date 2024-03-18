import type { FormFieldProps } from './formField';
import type { SelectContentProps, SelectRootProps } from 'radix-vue';

export interface FormSelectItem {
  value: any;
  label: string;
  disabled?: boolean;
}

export type FormSelectOptions = Record<string, FormSelectItem[]> | FormSelectItem[];

export interface FormSelectProps<UiConfig = any> extends SelectRootProps, Omit<FormFieldProps, 'ui'> {
  placeholder?: string;

  prefixIcon?: string;
  prefixText?: string;
  suffixIcon?: string;
  indicatorIcon?: string;
  scrollUpIcon?: string;
  scrollDownIcon?: string;

  ui?: UiConfig;

  options?: FormSelectOptions;

  offset?: number | string;
  align?: SelectContentProps['align'];
  side?: SelectContentProps['side'];
}
