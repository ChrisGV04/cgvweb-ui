import type { NuxtLinkProps } from "#app";

export interface Link extends NuxtLinkProps {
  active?: boolean;
  exact?: boolean;
  exactQuery?: boolean;
  exactHash?: boolean;
  inactiveClass?: string;
}
