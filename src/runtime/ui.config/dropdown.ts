import type { DropdownMenuContentProps } from 'radix-vue';

export default /*ui*/ {
  container: 'z-30 overflow-hidden bg-white shadow-md rounded-lg',
  border: 'border border-gray-900/10',
  size: 'w-56 min-w-32',
  padding: 'p-1',
  separator: '-mx-1 my-1 h-px bg-gray-900/5',
  transition:
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  label: {
    base: 'px-2 py-1.5',
    font: 'text-sm font-semibold',
  },
  item: {
    base: 'relative flex cursor-pointer select-none rounded-sm items-center outline-none transition-colors',
    label: 'text-sm',
    padding: 'px-2 py-1.5',
    inactive: '',
    active: 'focus:bg-gray-100 focus:text-gray-900',
    disabled: 'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    icon: 'mr-2 size-4',
  },
  default: {
    offset: 8,
    align: 'start' as DropdownMenuContentProps['align'],
    side: 'bottom' as DropdownMenuContentProps['side'],
  },
};
