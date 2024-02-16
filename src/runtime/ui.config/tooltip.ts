import type { PopoverContentProps } from 'radix-vue';

export default /*ui*/ {
  container: 'z-30 bg-white shadow rounded',
  border: 'border border-gray-900/10',
  size: 'max-w-xs',
  padding: 'px-2 py-1',
  font: 'text-gray-900 text-xs font-normal',
  transition:
    'animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  default: {
    offset: 8,
    delay: 0,
    align: 'center' as PopoverContentProps['align'],
    side: 'top' as PopoverContentProps['side'],
  },
};
