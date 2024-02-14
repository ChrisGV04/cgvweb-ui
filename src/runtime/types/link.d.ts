import type { NuxtLinkProps } from "#app";

export interface Link extends NuxtLinkProps {
  as?: any;
  type?: string;
  disabled?: boolean;
  active?: boolean;
  exact?: boolean;
  exactQuery?: boolean;
  exactHash?: boolean;
  inactiveClass?: string;
}
