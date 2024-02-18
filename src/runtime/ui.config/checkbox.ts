export default /*ui*/ {
  base: 'peer group shrink-0 rounded disabled:cursor-not-allowed disabled:opacity-70',
  size: 'size-5',
  bg: 'bg-white data-[state=checked]:bg-primary-600',
  ring: 'ring-1 ring-inset ring-gray-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 data-[state=checked]:ring-0',
  indicator: {
    base: 'flex h-full w-full items-center justify-center',
    icon: 'size-4 text-primary-600 group-data-[state=checked]:text-white',
  },
  default: {
    checkedIcon: 'i-heroicons-check-16-solid',
    indeterminateIcon: 'i-heroicons-minus-16-solid',
  },
};
