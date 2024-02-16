import type { AppConfig } from 'nuxt/schema';
import { badge } from '../ui.config';
import type { ExtractDeepKey } from './utils';

export type BadgeSize = keyof typeof badge.size | ExtractDeepKey<AppConfig, ['ui', 'badge', 'size']>;

export type BadgeColor = keyof typeof badge.color | ExtractDeepKey<AppConfig, ['ui', 'badge', 'color']>;

export interface Badge {
  dot?: boolean;
  label?: string;
  size?: BadgeSize;
  color?: BadgeColor;
}
