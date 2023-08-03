import { camelCase, kebabCase, omit, upperFirst } from "lodash-es";

const colorsToExclude = [
  "inherit",
  "transparent",
  "current",
  "white",
  "black",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "cool",
];

type ComponentSafelist = Record<
  string,
  (colorAsRegex: string) => { pattern: RegExp; variants?: string[] }[]
>;

// TODO
const safelistByComponent: ComponentSafelist = {};

// TODO
const safelistComponentAliasesMap = {};

const colorsAsRegex = (colors: string[]): string => colors.join("|");

export const excludeColors = (colors: object): string[] => {
  return Object.entries(omit(colors, colorsToExclude))
    .filter(([, value]) => typeof value === "object")
    .map(([key]) => kebabCase(key));
};

export const generateSafelist = (colors: string[], globalColors) => {
  const baseSafelist = Object.keys(safelistByComponent).flatMap((component) =>
    safelistByComponent[component](colorsAsRegex(colors))
  );

  // TODO: Uncomment when the forms exist
  // Ensure `red` color is safelisted for form elements so that `error` prop of forms always works
  // const formsSafelist = [
  //   "input",
  //   "radio",
  //   "checkbox",
  //   "toggle",
  //   "range",
  // ].flatMap((component) =>  safelistByComponent[component](colorsAsRegex(["red"])));
  // return [...baseSafelist, ...formsSafelist];

  return [...baseSafelist];
};

/**
 * Custom extractor that finds the color property inside of the components
 */
export const customSafelistExtractor = (
  prefix,
  content: string,
  colors: string[],
  safelistColors: string[]
) => {
  const classes = [];

  // Regex that only selects HTML elements with the `color="color"` attribute. It ignores `:color="variable"`.
  const regex =
    /<([A-Za-z][A-Za-z0-9]*(?:-[A-Za-z][A-Za-z0-9]*)*)\s+(?![^>]*:color\b)[^>]*\bcolor=["']([^"']+)["'][^>]*>/gs;

  const matches = content.matchAll(regex);

  const components = Object.keys(safelistByComponent).map(
    (component) =>
      `${prefix}${component.charAt(0).toUpperCase() + component.slice(1)}`
  );

  for (const match of matches) {
    const [, component, color] = match;

    const camelComponent = upperFirst(camelCase(component));

    if (!colors.includes(color) || safelistColors.includes(color)) {
      continue;
    }

    let name = safelistComponentAliasesMap[camelComponent]
      ? safelistComponentAliasesMap[camelComponent]
      : camelComponent;

    if (!components.includes(name)) {
      continue;
    }

    name = name.replace(prefix, "").toLowerCase();

    const matchClasses = safelistByComponent[name](color).flatMap((group) => {
      return ["", ...(group.variants || [])].flatMap((variant) => {
        const matches = group.pattern.source.match(/\(([^)]+)\)/g);

        return matches
          .map((match) => {
            const colorOptions = match
              .substring(1, match.length - 1)
              .split("|");
            return colorOptions.map(
              (color) =>
                `${variant ? variant + ":" : ""}` +
                group.pattern.source.replace(match, color)
            );
          })
          .flat();
      });
    });

    classes.push(...matchClasses);
  }

  return classes;
};
