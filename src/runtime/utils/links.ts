import { NuxtLink } from '#components';

export const getNuxtLinkProps = (props: any) => {
  const keys = Object.keys(NuxtLink.props);

  return keys.reduce((acc, key) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
