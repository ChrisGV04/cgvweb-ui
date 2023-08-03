export type UiBadgeColors =
  | "gray"
  | "blue"
  | "indigo"
  | "pink"
  | "purple"
  | "red"
  | "yellow"
  | "green";

export type UiBadgeSizes = "xs" | "sm";
export type UiBadgeVariants = "solid" | "subtle";

export interface UiBadgeConfig<
  TSizes extends string = any,
  TColors extends string = any,
  TVariants extends string = any
> {
  base: string;
  rounded: string;
  font: string;
  size: {
    [S in TSizes]: string;
  };
  color: {
    [K in TColors]: {
      [V in TVariants]: {
        action: string;
        addons: string;
        base: string;
      };
    };
  };
  default: {
    size: TSizes;
    color: TColors;
    variant: TVariants;
  };
}

export type UiBadgeDefaultConfig = UiBadgeConfig<
  UiBadgeSizes,
  UiBadgeColors,
  UiBadgeVariants
>;
