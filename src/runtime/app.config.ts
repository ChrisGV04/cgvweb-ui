import type { UseFloatingOptions } from "@floating-ui/vue";

// Data

// Elements

// Forms

// Layout

const container = {
  base: "mx-auto w-full",
  constrained: "max-w-7xl",
  padding: "px-4 sm:px-6 lg:px-8",
};

// Navigation

// Overlays

const tooltip = {
  wrapper: "relative inline-flex",
  container: "z-30",
  width: "max-w-xs",
  background: "bg-white dark:bg-gray-900",
  color: "text-gray-900 dark:text-white",
  shadow: "shadow",
  rounded: "rounded",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "px-2 py-1 text-xs font-normal truncate",
  floating: { strategy: "fixed" } as UseFloatingOptions,
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1",
  },
};

export default {
  ui: {
    container,
    tooltip,
  },
};
