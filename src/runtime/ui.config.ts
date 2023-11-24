// Data

// Elements

export const badge = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs gap-x-1 px-1.5 py-0.5",
    sm: "text-xs gap-x-1.5 px-2 py-1",
  },
  variant: {
    gray: {
      base: "bg-gray-50 text-gray-600 ring-gray-500/10 ring-1 ring-inset",
      addons: "text-gray-400",
      action: "hover:bg-gray-500/20",
    },
    "gray-solid": {
      base: "bg-gray-100 text-gray-600",
      addons: "text-gray-400",
      action: "hover:bg-gray-500/20",
    },

    blue: {
      base: "bg-blue-50 text-blue-700 ring-blue-700/10 ring-1 ring-inset",
      addons: "text-blue-500",
      action: "hover:bg-blue-600/20",
    },
    "blue-solid": {
      base: "bg-blue-100 text-blue-700",
      addons: "text-blue-500",
      action: "hover:bg-blue-600/20",
    },

    indigo: {
      base: "bg-indigo-50 text-indigo-700 ring-indigo-700/10 ring-1 ring-inset",
      addons: "text-indigo-500",
      action: "hover:bg-indigo-600/20",
    },
    "indigo-solid": {
      base: "bg-indigo-100 text-indigo-700",
      addons: "text-indigo-500",
      action: "hover:bg-indigo-600/20",
    },

    pink: {
      base: "bg-pink-50 text-pink-700 ring-pink-700/10 ring-1 ring-inset",
      addons: "text-pink-500",
      action: "hover:bg-pink-600/20",
    },
    "pink-solid": {
      base: "bg-pink-100 text-pink-700",
      addons: "text-pink-500",
      action: "hover:bg-pink-600/20",
    },

    purple: {
      base: "bg-purple-50 text-purple-700 ring-purple-700/10 ring-1 ring-inset",
      addons: "text-purple-500",
      action: "hover:bg-purple-600/20",
    },
    "purple-solid": {
      base: "bg-purple-100 text-purple-700",
      addons: "text-purple-500",
      action: "hover:bg-purple-600/20",
    },

    red: {
      base: "bg-red-50 text-red-700 ring-red-600/10 ring-1 ring-inset",
      addons: "text-red-500",
      action: "hover:bg-red-600/20",
    },
    "red-solid": {
      base: "bg-red-100 text-red-700",
      addons: "text-red-500",
      action: "hover:bg-red-600/20",
    },

    yellow: {
      base: "bg-yellow-50 text-yellow-800 ring-yellow-600/20 ring-1 ring-inset",
      addons: "text-yellow-500",
      action: "hover:bg-yellow-600/20",
    },
    "yellow-solid": {
      base: "bg-yellow-100 text-yellow-800",
      addons: "text-yellow-500",
      action: "hover:bg-yellow-600/20",
    },

    green: {
      base: "bg-emerald-50 text-emerald-700 ring-emerald-600/10 ring-1 ring-inset",
      addons: "text-emerald-500",
      action: "hover:bg-emerald-600/20",
    },
    "green-solid": {
      base: "bg-emerald-100 text-emerald-700",
      addons: "text-emerald-500",
      action: "hover:bg-emerald-600/20",
    },
  },
  default: {
    size: "sm",
    variant: "gray",
  },
};

export const button = {
  base: "flex-shrink-0 items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
  font: "font-semibold",
  rounded: "rounded-md",
  transition: "transition-colors duration-100",
  size: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
  },
  gap: {
    xs: "gap-x-1.5",
    sm: "gap-x-1.5",
    md: "gap-x-2",
  },
  padding: {
    xs: "px-2 py-1",
    sm: "px-4 py-2",
    md: "px-5 py-2.5",
  },
  variant: {
    "white-solid":
      "bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 disabled:bg-white",
    "white-soft":
      "bg-white/20 text-white hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:bg-white/10",
    "white-ghost":
      "text-white hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:bg-transparent",
    "white-link":
      "text-white underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400 disabled:text-white",

    "black-solid":
      "bg-gray-900 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 disabled:bg-gray-900",
    "black-soft":
      "bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:bg-gray-50",
    "black-ghost":
      "text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:bg-transparent",
    "black-link":
      "text-gray-900 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:text-gray-900",
  },
  icon: {
    base: "flex-shrink-0",
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-5 w-5",
    },
  },
  default: {
    size: "sm",
    variant: "black-solid",
    loadingIcon: "i-heroicons-arrow-path-20-solid",
  },
};

// Forms

// Layout

export const container = {
  base: "mx-auto w-full",
  constrained: "max-w-7xl",
  xPadding: "px-4 sm:px-6 lg:px-8",
  yPadding: "",
};

// Navigation

// Overlays

export const tooltip = {
  wrapper: "relative inline-flex",
  container: "z-30",
  width: "max-w-xs",
  background: "bg-white",
  color: "text-gray-900",
  shadow: "shadow",
  rounded: "rounded",
  ring: "ring-1 ring-gray-200",
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

export const dialog = {
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

export const slideover = {
  wrapper: "relative z-40",
  inner: "fixed inset-0 z-10",
  container: "flex min-h-full justify-end",
  padding: "min-w-[3rem] px-1 py-4 flex flex-col",
  base: "relative h-screen overflow-y-scroll",
  background: "bg-white",
  ring: "",
  rounded: "",
  shadow: "shadow-xl",
  width: "flex-1 max-w-md",
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
  transition: {
    enter: "transform transition ease-in-out duration-500 sm:duration-700",
    leave: "transform transition ease-in-out duration-500 sm:duration-700",
  },
};
