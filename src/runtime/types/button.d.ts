import type { AppConfig } from 'nuxt/schema';
import type { PrimitiveProps } from 'radix-vue';
import type { button } from '../ui.config';
import type { LinkProps } from './link';
import type { ExtractDeepKey } from './utils';

export type ButtonSize = keyof typeof button.size | ExtractDeepKey<AppConfig, ['ui', 'button', 'size']>;

export type ButtonVariant =
  | keyof typeof button.variant
  | ExtractDeepKey<AppConfig, ['ui', 'button', 'variant']>;

export interface ButtonProps<T = any> extends LinkProps, PrimitiveProps {
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  loadingIcon?: string;
  loading?: boolean;
  disabled?: boolean;
  truncate?: boolean;
  padded?: boolean;
  type?: HTMLButtonElement['type'];
  size?: ButtonSize;
  variant?: ButtonVariant;
  class?: any;
  ui?: T;
}
