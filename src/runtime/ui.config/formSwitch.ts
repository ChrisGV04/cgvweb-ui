export default /*ui*/ {
  base: 'peer inline-flex shrink-0 cursor-pointer items-center rounded-full disabled:cursor-not-allowed disabled:opacity-70',
  size: 'w-11 h-6',
  ring: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
  bg: 'data-[state=checked]:bg-primary-700 data-[state=unchecked]:bg-gray-300',
  transition: 'transition-colors duration-200',
  thumb: {
    base: 'pointer-events-none block rounded-full bg-white shadow ring-0',
    size: 'size-5',
    transition:
      'transition-transform duration-200 data-[state=checked]:translate-x-[1.375rem] data-[state=unchecked]:translate-x-0.5',
  },
};
