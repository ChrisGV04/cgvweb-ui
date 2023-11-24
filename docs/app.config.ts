import { defineAppConfig } from "#imports";

export default defineAppConfig({
  ui: {
    container: {
      constrained: "max-w-2xl",
    },

    button: {
      variant: {
        "primary-solid":
          "bg-primary-500 text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:bg-primary-500",
        "primary-soft":
          "bg-primary-50 text-primary-600 hover:bg-primary-100 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:bg-primary-50",
        "primary-ghost":
          "text-primary-500 hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:bg-transparent",
        "primary-link":
          "text-primary-500 underline-offset-4 hover:text-primary-600 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:text-primary-500",
      },

      default: {
        variant: "primary-solid",
      },
    },
  },
});
