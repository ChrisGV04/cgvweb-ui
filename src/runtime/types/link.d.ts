import type { NuxtLinkProps } from "nuxt/app";

export interface Link extends NuxtLinkProps {
  active?: boolean;
  exact?: boolean;
  exactQuery?: boolean;
  exactHash?: boolean;
  inactiveClass?: string;
}
