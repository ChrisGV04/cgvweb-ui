export default /*ui*/ {
  container: 'fixed z-50 bg-white shadow-xl',
  size: '',
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
    enterActive: 'transition-transform ease-in-out duration-500',
    leaveActive: 'transition-transform ease-in-out duration-300',
  },
};
