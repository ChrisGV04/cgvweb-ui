import type { SelectContentProps } from 'radix-vue';

export default /*ui*/ {
  trigger: {
    base: 'flex w-full items-center bg-white group-data-[error]:bg-red-50',
    rounded: 'rounded-lg',
    ring: 'focus-within:ring-2 focus-within:ring-primary-600 group-data-[error]:focus-within:ring-red-400',
    border: 'border border-gray-900/10 group-data-[error]:border-red-800',
    icon: 'size-4 text-gray-600 group-data-[error]:text-red-600',
    font: {
      value: 'text-sm text-left truncate text-gray-900 group-data-[error]:text-red-800',
      addons: 'text-sm select-none text-gray-500 group-data-[error]:text-red-600',
    },
    value: {
      base: 'block h-8 w-full flex-1',
      padding: 'px-2 py-1.5',
    },
  },

  content: {
    base: 'z-30 bg-white shadow-md',
    rounded: 'rounded-lg',
    border: 'border border-gray-900/10',
    size: 'w-[--radix-select-trigger-width] min-w-32',
    transition:
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  },

  viewport: 'p-1',

  group: {
    label: 'text-xs text-gray-500 px-2 py-1 font-semibold',
    separator: '-mx-1 my-1 h-px bg-gray-900/5',
  },

  item: {
    base: 'relative flex cursor-pointer select-none rounded-sm items-center outline-none transition-colors',
    label: 'text-sm',
    padding: 'px-2 py-1.5',
    inactive: '',
    active: 'data-[highlighted]:outline-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900',
    disabled: 'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    indicator: 'mr-2 size-4 text-primary-600',
  },

  scrollButtons: {
    base: 'flex items-center justify-center bg-white cursor-default',
    size: 'h-6',
    icon: 'size-4 text-gray-500',
  },

  default: {
    offset: 8,
    align: 'start' as SelectContentProps['align'],
    side: 'bottom' as SelectContentProps['side'],

    suffixIcon: 'i-heroicons-chevron-down-20-solid',
    indicatorIcon: 'i-heroicons-check-20-solid',
    scrollUpIcon: 'i-heroicons-chevron-up-20-solid',
    scrollDownIcon: 'i-heroicons-chevron-down-20-solid',
  },
};
