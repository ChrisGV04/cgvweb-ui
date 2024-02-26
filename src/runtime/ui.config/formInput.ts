export default /*ui*/ {
  base: 'flex w-full items-center bg-white group-data-[error]:bg-red-50',
  rounded: 'rounded-lg',
  ring: 'focus-within:ring-2 focus-within:ring-primary-600 group-data-[error]:focus-within:ring-red-400',
  border: 'border border-gray-900/10 group-data-[error]:border-red-800',
  icon: 'size-4 text-gray-600 peer-focus:text-primary-600 group-data-[error]:text-red-600 group-data-[error]:peer-focus:text-red-600',
  addons: 'text-sm select-none text-gray-500 peer-focus:text-primary-600 group-data-[error]:text-red-600',
  input: {
    base: 'block w-full flex-1 border-0 bg-transparent focus:ring-0 group-data-[disabled-mode=disabled]:cursor-not-allowed',
    padding: 'px-2 py-1.5',
    font:
      'text-sm text-gray-900 placeholder:text-gray-400 group-data-[error]:text-red-800 group-data-[error]:placeholder:text-red-500',
  },
};
