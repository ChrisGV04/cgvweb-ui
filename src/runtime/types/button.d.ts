import type { AppConfig } from "nuxt/schema";
import { button } from "../ui.config";
import type { Link } from "./link";
import type { DeepPartial, ExtractDeepKey, Strategy } from "./utils";

export type ButtonSize =
  | keyof typeof button.size
  | ExtractDeepKey<AppConfig, ["ui", "button", "size"]>;

export type ButtonVariant =
  | keyof typeof button.variant
  | ExtractDeepKey<AppConfig, ["ui", "button", "variant"]>;

export interface Button extends Link {
  label?: string;
  loadingIcon?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  type?: HTMLButtonElement["type"];
  loading?: boolean;
  disabled?: boolean;
  truncate?: boolean;
  block?: boolean;
  padded?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  ui?: DeepPartial<typeof button & { strategy?: Strategy }>;
  class?: any;
}
