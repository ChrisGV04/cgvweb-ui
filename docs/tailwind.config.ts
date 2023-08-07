import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Inter fallback", ...defaultTheme.fontFamily.sans],
      },

      colors: { primary: colors.sky },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
