/**
 * Helper function that only picks valid keys from the NuxtLink component
 *
 * @param input Any props object
 * @returns Object containing only UiLinkProps
 */
export function extractUiLinkProps(input: object): any {
  const knownProps = [
    "type",
    "disabled",
    "exact",
    "exactQuery",
    "exactHash",
    "inactiveClass",

    "to",
    "href",
    "target",
    "rel",
    "noRel",
    "prefetch",
    "noPrefetch",
    "activeClass",
    "prefetchedClass",
    "replace",
    "ariaCurrentValue",
  ];

  return knownProps.reduce((result, propName) => {
    result[propName] = input[propName] ?? undefined;
    return result;
  }, {});
}
