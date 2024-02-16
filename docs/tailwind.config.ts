import type { Config } from 'tailwindcss';
import { sky } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },

      colors: { primary: sky },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
