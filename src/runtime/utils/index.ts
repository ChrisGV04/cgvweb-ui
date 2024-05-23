import type { Strategy } from '../types';

import { createDefu, defu } from 'defu';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge<string, string>({
  extend: {
    classGroups: {
      icons: [(classPart: string) => classPart.startsWith('i-')],
    },
  },
});

const defuTwMerge = createDefu((obj, key, value, namespace) => {
  if (namespace === 'default' || namespace.startsWith('default.')) {
    return false;
  }
  if (typeof obj[key] === 'string' && typeof value === 'string' && obj[key] && value) {
    // @ts-expect-error Use of arbitrary keys
    obj[key] = customTwMerge(obj[key], value);
    return true;
  }
});

export function mergeConfig<T>(strategy: Strategy = 'merge', ...configs): T {
  if (strategy === 'override') {
    return defu({}, ...configs) as T;
  }

  return defuTwMerge({}, ...configs) as T;
}

export function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (_, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${Number.parseInt(result[1], 16)} ${Number.parseInt(result[2], 16)} ${Number.parseInt(result[3], 16)}`
    : null;
}

export function getSlotsChildren(slots: any) {
  let children = slots.default?.();
  if (children.length) {
    children = children
      .flatMap((c: any) => {
        if (typeof c.type === 'symbol') {
          if (typeof c.children === 'string') {
            // `v-if="false"` or commented node
            return;
          }
          return c.children;
        } else if (c.type.name === 'ContentSlot') {
          return c.ctx.slots.default?.();
        }
        return c;
      })
      .filter(Boolean);
  }
  return children;
}

export const isDeepEqual = (object1: any, object2: any): boolean => {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const areObjects = isObject(value1) && isObject(value2);

    if ((areObjects && !isDeepEqual(value1, value2)) || (!areObjects && value1 !== value2)) {
      return false;
    }
  }
  return true;
};

export const isObject = (input: unknown): input is object => {
  return input != null && typeof input === 'object';
};
