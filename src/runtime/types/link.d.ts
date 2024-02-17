import type { NuxtLinkProps } from 'nuxt/app';

export interface LinkProps extends NuxtLinkProps {
  exact?: boolean;
  exactQuery?: boolean;

  /**
   * Browsers don't send hash on SSR. Use inside <ClientOnly>
   *
   * Reference: {@link https://nuxt.com/docs/api/composables/use-route#api}
   */
  exactHash?: boolean;
}
