export default /*ui*/ {
  container: 'fixed z-50 bg-white shadow-xl',
  size: '',
  overlay:
    'fixed inset-0 z-40 bg-black/70 backdrop-blur-sm backdrop-filter duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  transition:
    'transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
};
