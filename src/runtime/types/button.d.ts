import { button } from "../ui.config";
import type { Link } from "./link";
import type { DeepPartial, Strategy } from "./utils";

export type ButtonSize = keyof typeof button.size;
export type ButtonColor = "primary" | "white" | "black";
export type ButtonVariant = "solid" | "soft" | "ghost" | "link";

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
  color?: ButtonColor;
  variant?: ButtonVariant;
  ui?: DeepPartial<typeof button & { strategy?: Strategy }>;
  class?: any;
}
