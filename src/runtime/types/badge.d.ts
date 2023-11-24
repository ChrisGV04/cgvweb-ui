import type { AppConfig } from "nuxt/schema";
import { badge } from "../ui.config";
import type { ExtractDeepKey } from "./utils";

export type BadgeSize =
  | keyof typeof badge.size
  | ExtractDeepKey<AppConfig, ["ui", "badge", "size"]>;

export type BadgeVariant =
  | keyof typeof badge.variant
  | ExtractDeepKey<AppConfig, ["ui", "badge", "variant"]>;

export interface Badge {
  dot?: boolean;
  label?: string;
  size?: BadgeSize;
  actionIcon?: string;
  variant?: BadgeVariant;
}
