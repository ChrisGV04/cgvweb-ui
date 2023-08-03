import type {
  UiBadgeConfig,
  UiContainerConfig,
  UiTooltipConfig,
} from "./types";

// Data

// Elements

const badge: UiBadgeConfig = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs gap-x-1 px-1.5 py-0.5",
    sm: "text-xs gap-x-1.5 px-2 py-1",
  },
  color: {
    gray: {
      solid: {
        base: "bg-gray-100 text-gray-600",
        addons: "text-gray-400",
        action: "hover:bg-gray-500/20",
      },
      subtle: {
        base: "bg-gray-50 text-gray-600 ring-gray-500/10 ring-1 ring-inset",
        addons: "text-gray-400",
        action: "hover:bg-gray-500/20",
      },
    },
    blue: {
      solid: {
        base: "bg-blue-100 text-blue-700",
        addons: "text-blue-500",
        action: "hover:bg-blue-600/20",
      },
      subtle: {
        base: "bg-blue-50 text-blue-700 ring-blue-700/10 ring-1 ring-inset",
        addons: "text-blue-500",
        action: "hover:bg-blue-600/20",
      },
    },
    indigo: {
      solid: {
        base: "bg-indigo-100 text-indigo-700",
        addons: "text-indigo-500",
        action: "hover:bg-indigo-600/20",
      },
      subtle: {
        base: "bg-indigo-50 text-indigo-700 ring-indigo-700/10 ring-1 ring-inset",
        addons: "text-indigo-500",
        action: "hover:bg-indigo-600/20",
      },
    },
    pink: {
      solid: {
        base: "bg-pink-100 text-pink-700",
        addons: "text-pink-500",
        action: "hover:bg-pink-600/20",
      },
      subtle: {
        base: "bg-pink-50 text-pink-700 ring-pink-700/10 ring-1 ring-inset",
        addons: "text-pink-500",
        action: "hover:bg-pink-600/20",
      },
    },
    purple: {
      solid: {
        base: "bg-purple-100 text-purple-700",
        addons: "text-purple-500",
        action: "hover:bg-purple-600/20",
      },
      subtle: {
        base: "bg-purple-50 text-purple-700 ring-purple-700/10 ring-1 ring-inset",
        addons: "text-purple-500",
        action: "hover:bg-purple-600/20",
      },
    },
    red: {
      solid: {
        base: "bg-red-100 text-red-700",
        addons: "text-red-500",
        action: "hover:bg-red-600/20",
      },
      subtle: {
        base: "bg-red-50 text-red-700 ring-red-600/10 ring-1 ring-inset",
        addons: "text-red-500",
        action: "hover:bg-red-600/20",
      },
    },
    yellow: {
      solid: {
        base: "bg-yellow-100 text-yellow-800",
        addons: "text-yellow-500",
        action: "hover:bg-yellow-600/20",
      },
      subtle: {
        base: "bg-yellow-50 text-yellow-800 ring-yellow-600/20 ring-1 ring-inset",
        addons: "text-yellow-500",
        action: "hover:bg-yellow-600/20",
      },
    },
    green: {
      solid: {
        base: "bg-emerald-100 text-emerald-700",
        addons: "text-emerald-500",
        action: "hover:bg-emerald-600/20",
      },
      subtle: {
        base: "bg-emerald-50 text-emerald-700 ring-emerald-600/10 ring-1 ring-inset",
        addons: "text-emerald-500",
        action: "hover:bg-emerald-600/20",
      },
    },
  },
  default: {
    size: "sm",
    color: "gray",
    variant: "subtle",
  },
};

// Forms

// Layout

const container: UiContainerConfig = {
  base: "mx-auto w-full",
  constrained: "max-w-7xl",
  padding: "px-4 sm:px-6 lg:px-8",
};

// Navigation

// Overlays

const tooltip: UiTooltipConfig = {
  wrapper: "relative inline-flex",
  container: "z-30",
  width: "max-w-xs",
  background: "bg-white dark:bg-gray-900",
  color: "text-gray-900 dark:text-white",
  shadow: "shadow",
  rounded: "rounded",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "px-2 py-1 text-xs font-normal truncate",
  floating: { strategy: "fixed" },
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1",
  },
};

const dialog = {
  wrapper: "relative z-40",
  inner: "fixed inset-0 z-10 overflow-y-auto",
  container: "flex min-h-full items-end justify-center sm:items-center",
  padding: "p-4 sm:p-0",
  base: "relative text-left overflow-hidden sm:my-8 w-full flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-900/70 backdrop-blur-sm backdrop-filter",
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
    },
  },
  background: "bg-white",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "sm:max-w-lg",
  height: "",
  transition: {
    enter: "transition-[opacity,transform] ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "transition-[opacity,transform] ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  },
};

export default {
  ui: {
    badge,
    container,
    dialog,
    tooltip,
  },
};
