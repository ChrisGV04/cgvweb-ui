import type { AppConfig } from 'nuxt/schema';
import type { alertDialog } from '../ui.config';
import type { ButtonVariant } from './button';
import type { ExtractDeepKey } from './utils';

export type AlertDialogVariant =
  | keyof typeof alertDialog.variant
  | ExtractDeepKey<AppConfig, ['ui', 'alertDialog', 'variant']>;

export interface AlertDialogProps<T> {
  open?: boolean;
  defaultOpen?: boolean;
  ui?: T;

  title: string;
  description: string;
  icon?: string;
  variant?: AlertDialogVariant;

  confirmBtn?: {
    label?: string;
    variant?: ButtonVariant;
    action?: (() => boolean | void) | (() => Promise<boolean | void>);
  };
  cancelBtn?: {
    label?: string;
    variant?: ButtonVariant;
  };
}
