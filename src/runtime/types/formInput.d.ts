import type { FormFieldProps } from '#ui/types';
import type { InputHTMLAttributes } from 'vue';

export interface InputProps<UiConfig = any> extends Omit<FormFieldProps, 'ui'> {
  prefixIcon?: string;
  prefixText?: string;
  suffixIcon?: string;
  suffixText?: string;
  placeholder?: string;
  type?: InputHTMLAttributes['type'];

  /** Controlled input value */
  modelValue?: string | number;

  /** Uncontrolled default value */
  defaultValue?: string | number;

  ui?: UiConfig;
}
