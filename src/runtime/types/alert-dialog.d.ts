import type { AppConfig } from 'nuxt/schema';
import { alertDialog } from '../ui.config';
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
    action?: (() => void) | (() => Promise<void>);
  };
  cancelBtn?: {
    label?: string;
    variant?: ButtonVariant;
  };
}
