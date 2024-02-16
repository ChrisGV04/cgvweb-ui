export default /*ui*/ {
  base: 'inline-flex items-center',
  rounded: 'rounded-md',
  font: 'font-medium',
  size: {
    xs: 'text-xs gap-x-1 px-1.5 py-0.5',
    sm: 'text-xs gap-x-1.5 px-2 py-1',
  },
  variant: {
    gray: {
      base: 'bg-gray-50 text-gray-600 ring-gray-500/10 ring-1 ring-inset',
      addons: 'text-gray-400',
      action: 'hover:bg-gray-500/20',
    },
    'gray-solid': {
      base: 'bg-gray-100 text-gray-600',
      addons: 'text-gray-400',
      action: 'hover:bg-gray-500/20',
    },

    blue: {
      base: 'bg-blue-50 text-blue-700 ring-blue-700/10 ring-1 ring-inset',
      addons: 'text-blue-500',
      action: 'hover:bg-blue-600/20',
    },
    'blue-solid': {
      base: 'bg-blue-100 text-blue-700',
      addons: 'text-blue-500',
      action: 'hover:bg-blue-600/20',
    },

    indigo: {
      base: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10 ring-1 ring-inset',
      addons: 'text-indigo-500',
      action: 'hover:bg-indigo-600/20',
    },
    'indigo-solid': {
      base: 'bg-indigo-100 text-indigo-700',
      addons: 'text-indigo-500',
      action: 'hover:bg-indigo-600/20',
    },

    pink: {
      base: 'bg-pink-50 text-pink-700 ring-pink-700/10 ring-1 ring-inset',
      addons: 'text-pink-500',
      action: 'hover:bg-pink-600/20',
    },
    'pink-solid': {
      base: 'bg-pink-100 text-pink-700',
      addons: 'text-pink-500',
      action: 'hover:bg-pink-600/20',
    },

    purple: {
      base: 'bg-purple-50 text-purple-700 ring-purple-700/10 ring-1 ring-inset',
      addons: 'text-purple-500',
      action: 'hover:bg-purple-600/20',
    },
    'purple-solid': {
      base: 'bg-purple-100 text-purple-700',
      addons: 'text-purple-500',
      action: 'hover:bg-purple-600/20',
    },

    red: {
      base: 'bg-red-50 text-red-700 ring-red-600/10 ring-1 ring-inset',
      addons: 'text-red-500',
      action: 'hover:bg-red-600/20',
    },
    'red-solid': {
      base: 'bg-red-100 text-red-700',
      addons: 'text-red-500',
      action: 'hover:bg-red-600/20',
    },

    yellow: {
      base: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 ring-1 ring-inset',
      addons: 'text-yellow-500',
      action: 'hover:bg-yellow-600/20',
    },
    'yellow-solid': {
      base: 'bg-yellow-100 text-yellow-800',
      addons: 'text-yellow-500',
      action: 'hover:bg-yellow-600/20',
    },

    green: {
      base: 'bg-emerald-50 text-emerald-700 ring-emerald-600/10 ring-1 ring-inset',
      addons: 'text-emerald-500',
      action: 'hover:bg-emerald-600/20',
    },
    'green-solid': {
      base: 'bg-emerald-100 text-emerald-700',
      addons: 'text-emerald-500',
      action: 'hover:bg-emerald-600/20',
    },
  },
  default: {
    size: 'sm',
    variant: 'gray',
  },
};
