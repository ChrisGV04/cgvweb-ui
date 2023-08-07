export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const hexToRgb = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (_, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
        result[3],
        16
      )}`
    : null;
};

export const getSlotsChildren = (slots: any) => {
  let children = slots.default?.();
  if (children.length) {
    children = children
      .flatMap((c) => {
        if (typeof c.type === "symbol") {
          if (typeof c.children === "string") {
            // `v-if="false"` or commented node
            return;
          }
          return c.children;
        } else if (c.type.name === "ContentSlot") {
          return c.ctx.slots.default?.();
        }
        return c;
      })
      .filter(Boolean);
  }
  return children;
};

export const isDeepEqual = (object1: unknown, object2: unknown): boolean => {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const areObjects = isObject(value1) && isObject(value2);

    if (
      (areObjects && !isDeepEqual(value1, value2)) ||
      (!areObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

export const isObject = (input: unknown): input is object => {
  return input != null && typeof input === "object";
};
