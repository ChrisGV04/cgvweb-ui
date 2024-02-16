export default /*ui*/ {
  wrapper: 'relative z-40',
  inner: 'fixed inset-0 z-10',
  container: 'flex min-h-full justify-end',
  padding: 'min-w-[3rem] px-1 py-4 flex flex-col',
  base: 'relative h-screen overflow-y-scroll',
  background: 'bg-white',
  ring: '',
  rounded: '',
  shadow: 'shadow-xl',
  width: 'flex-1 max-w-md',
  overlay: {
    base: 'fixed inset-0 transition-opacity',
    background: 'bg-gray-900/70 backdrop-blur-sm backdrop-filter',
    transition: {
      enter: 'ease-out duration-300',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'ease-in duration-200',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
  },
  transition: {
    enter: 'transform transition ease-in-out duration-500 sm:duration-700',
    leave: 'transform transition ease-in-out duration-500 sm:duration-700',
  },
};
