export default /*ui*/ {
  container: 'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white shadow-xl',
  layout: 'flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-4',
  size: 'w-full max-w-lg',
  padding: 'px-4 py-6',
  title: 'text-center text-lg font-medium text-gray-900 sm:text-left sm:text-xl',
  description: 'mt-1 text-center text-gray-600 sm:text-left',
  actions: {
    container: 'mt-4 flex flex-col gap-2 sm:flex-row sm:justify-start',
    buttons: '',
  },
  variant: {
    danger: {
      icon: 'i-heroicons-exclamation-triangle',
      color: 'bg-red-100 text-red-600',
    },
    warn: {
      icon: 'i-heroicons-exclamation-triangle',
      color: 'bg-amber-100 text-amber-600',
    },
    info: {
      icon: 'i-heroicons-information-circle',
      color: 'bg-blue-100 text-blue-600',
    },
  },
  icon: {
    container: 'flex size-10 shrink-0 items-center justify-center',
    rounded: 'rounded-full',
    size: 'size-6',
  },
  overlay: {
    base: 'fixed inset-0 z-40 bg-black/70 backdrop-blur-sm backdrop-filter',
    transition: {
      enterActive: 'ease-out duration-200',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leaveActive: 'ease-in duration-200',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
  },
  transition: {
    enterActive: 'transition-[opacity,transform] ease-out duration-300',
    enterFrom: 'opacity-0 -translate-y-[40%] scale-95',
    enterTo: 'opacity-100 scale-100',
    leaveActive: 'transition-[opacity,transform] ease-in duration-200',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95',
  },
  default: {
    variant: 'info',
  },
};
