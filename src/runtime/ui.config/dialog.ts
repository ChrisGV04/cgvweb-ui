export default /*ui*/ {
  container: 'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white shadow-xl',
  size: 'w-full max-w-lg',
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
};
