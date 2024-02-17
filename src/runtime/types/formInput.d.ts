import type { InputHTMLAttributes } from 'vue';
import type { PrimitiveProps } from 'radix-vue';

export interface InputProps<UiConfig = any> extends PrimitiveProps {
  name: string;
  label?: string;
  error?: boolean;
  message?: string;
  readOnly?: boolean;
  disabled?: boolean;
  mandatory?: boolean;
  prefixIcon?: string;
  prefixText?: string;
  suffixIcon?: string;
  suffixText?: string;
  placeholder?: string;
  /** Controlled input value */
  modelValue?: string | number;
  /** Uncontrolled default value */
  defaultValue?: string | number;
  type?: InputHTMLAttributes['type'];
  ui?: UiConfig;
  class?: any;
}
