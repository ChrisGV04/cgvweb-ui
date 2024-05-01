import type { AppConfig } from 'nuxt/schema';
import type { badge } from '../ui.config';
import type { ExtractDeepKey } from './utils';
import type { PrimitiveProps } from 'radix-vue';

export type BadgeSize = keyof typeof badge.size | ExtractDeepKey<AppConfig, ['ui', 'badge', 'size']>;

export type BadgeColor = keyof typeof badge.color | ExtractDeepKey<AppConfig, ['ui', 'badge', 'color']>;

export interface BadgeProps<T = any> extends PrimitiveProps {
  dot?: boolean;
  interactive?: boolean;
  label?: string;
  size?: BadgeSize;
  color?: BadgeColor;
  class?: any;
  ui?: T;
}
