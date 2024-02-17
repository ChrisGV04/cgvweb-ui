export default /*ui*/ {
  base: 'flex-shrink-0 items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
  font: 'font-semibold',
  rounded: 'rounded-md',
  transition: 'transition-colors duration-100',
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
  },
  gap: {
    xs: 'gap-x-1.5',
    sm: 'gap-x-1.5',
    md: 'gap-x-2',
  },
  padding: {
    xs: 'px-2 py-1',
    sm: 'px-4 py-2',
    md: 'px-5 py-2.5',
  },
  variant: {
    'white-solid':
      'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 disabled:bg-white',
    'white-soft':
      'bg-white/20 text-white hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:bg-white/10',
    'white-ghost':
      'text-white hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:bg-transparent',
    'white-link':
      'text-white underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400 disabled:text-white',

    'black-solid':
      'bg-gray-900 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 disabled:bg-gray-900',
    'black-soft':
      'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:bg-gray-50',
    'black-ghost':
      'text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:bg-transparent',
    'black-link':
      'text-gray-900 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:text-gray-900',
  },
  icon: {
    base: 'flex-shrink-0',
    size: {
      xs: 'h-4 w-4',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
    },
  },
  default: {
    size: 'sm',
    variant: 'black-solid',
    loadingIcon: 'i-heroicons-arrow-path-20-solid',
  },
};
