import { NuxtLink } from '#components';
import UiLink from '#ui/components/elements/Link.vue';
import type { LinkProps } from '#ui/types';
import type { NuxtLinkProps } from 'nuxt/app';

export const getNuxtLinkProps = (props: any): NuxtLinkProps => {
  const keys = Object.keys(NuxtLink.props);

  return keys.reduce((acc, key) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};

export const getUiLinkProps = (props: any): LinkProps => {
  const keys = Object.keys(UiLink.props);

  return keys.reduce((acc, key) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
