import type { PrimitiveProps } from 'radix-vue';

export interface FormFieldProps<UiConfig = any> extends PrimitiveProps {
  name: string;
  label?: string;
  error?: boolean;
  message?: string;
  disabled?: boolean;
  readOnly?: boolean;
  mandatory?: boolean;

  ui?: UiConfig;
  class?: any;
}
