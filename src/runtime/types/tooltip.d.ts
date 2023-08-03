import type { UseFloatingOptions } from "@floating-ui/vue";
import type { TransitionProps } from "vue";

export interface UiTooltipConfig {
  wrapper: string;
  container: string;
  width: string;
  background: string;
  color: string;
  shadow: string;
  rounded: string;
  ring: string;
  base: string;
  floating: UseFloatingOptions;
  transition: TransitionProps;
}
