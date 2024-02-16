/** @type {import("prettier").Options} */
const config = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 110,
  endOfLine: 'auto',
  singleQuote: true,
  trailingComma: 'all',
  bracketSameLine: false,
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
