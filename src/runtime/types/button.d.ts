export type UiButtonColors = "primary" | "white" | "black";
export type UiButtonSizes = "xs" | "sm" | "md";
export type UiButtonVariants = "solid" | "soft" | "ghost" | "link";

export interface UiButtonConfig<
  TSizes extends string = any,
  TColors extends string = any,
  TVariants extends string = any
> {
  base: string;
  font: string;
  rounded: string;
  transition: string;
  size: { [S in TSizes]: string };
  gap: { [S in TSizes]: string };
  padding: { [S in TSizes]: string };
  color: {
    [C in TColors]: {
      [V in Variants]: string;
    };
  };
  icon: {
    base: string;
    size: { [S in TSizes]: string };
  };
  default: {
    size: TSizes;
    color: TColors;
    variant: TVariants;
    loadingIcon: string;
  };
}

export type UiButtonDefaultConfig = UiButtonConfig<
  UiButtonSizes,
  UiButtonColors,
  UiButtonVariants
>;
