import type { NuxtLinkProps } from '#app';

export interface DropdownItem extends NuxtLinkProps {
  label: string;
  labelClass?: string;
  icon?: string;
  iconClass?: string;
  disabled?: boolean;
  class?: string;
  click?: () => void;
}
