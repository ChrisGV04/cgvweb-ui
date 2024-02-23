import type { ComboboxContentProps } from 'radix-vue';

export default /*ui*/ {
  anchor: {
    wrapper: 'flex flex-col gap-y-1 data-[disabled-mode=disabled]:opacity-70',
    base: 'flex w-full items-center bg-white group-data-[error]:bg-red-50',
    rounded: 'rounded-lg',
    ring: 'focus-within:ring-2 focus-within:ring-primary-600 group-data-[error]:focus-within:ring-red-400',
    border: 'border border-gray-900/10 group-data-[error]:border-red-800',
    font: {
      input:
        'text-sm text-gray-900 placeholder:text-gray-400 group-data-[error]:text-red-800 group-data-[error]:placeholder:text-red-500',
      addons: 'text-sm select-none text-gray-500 peer-focus:text-primary-600 group-data-[error]:text-red-600',
      message: 'text-xs text-gray-500 group-data-[error]:text-red-600',
    },
    input: {
      base: 'block w-full flex-1 border-0 bg-transparent focus:ring-0 group-data-[disabled-mode=disabled]:cursor-not-allowed',
      padding: 'px-2 py-1.5',
    },
    icon: 'size-4 text-gray-600 peer-focus:text-primary-600 group-data-[error]:text-red-600 group-data-[error]:peer-focus:text-red-600',
  },

  content: {
    base: 'z-30 overflow-hidden bg-white shadow-md rounded-lg',
    border: 'border border-gray-900/10',
    size: 'w-[--radix-combobox-trigger-width] min-w-32',
    transition:
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  },

  viewport: 'p-1',
  empty: 'px-2 text-sm text-gray-600',

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

  loading: {
    base: 'flex justify-center py-1',
    icon: 'size-4 text-gray-500 animate-spin',
  },

  default: {
    offset: 8,
    align: 'start' as ComboboxContentProps['align'],
    side: 'bottom' as ComboboxContentProps['side'],

    triggerIcon: 'i-heroicons-chevron-down-20-solid',
    indicatorIcon: 'i-heroicons-check-20-solid',
    loadingIcon: 'i-heroicons-arrow-path-20-solid',
  },
};
