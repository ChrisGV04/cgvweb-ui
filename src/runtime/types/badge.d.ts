import { badge } from "../ui.config";

export type BadgeSize = keyof typeof badge.size;
export type BadgeColor = keyof typeof badge.color;
export type BadgeVariant = "solid" | "subtle";

export interface Badge {
  dot?: boolean;
  label?: string;
  size?: BadgeSize;
  color?: BadgeColor;
  actionIcon?: string;
  variant?: BadgeVariant;
}
