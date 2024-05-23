import type { ModuleOptions } from './module';

import { addTemplate, createResolver, installModule, useNuxt } from '@nuxt/kit';
import { defu } from 'defu';
import { join } from 'pathe';

export default async function installTailwind(
  moduleOptions: ModuleOptions,
  nuxt = useNuxt(),
  resolve = createResolver(import.meta.url).resolve,
) {
  const runtimeDir = resolve('./runtime');

  // 1. register hook
  nuxt.hook('tailwindcss:config', function (tailwindConfig) {
    tailwindConfig.theme = tailwindConfig.theme || {};
    tailwindConfig.plugins = tailwindConfig.plugins || [];
    tailwindConfig.theme.extend = tailwindConfig.theme.extend || {};
    tailwindConfig.theme.extend.colors = tailwindConfig.theme.extend.colors || {};

    nuxt.options.appConfig.ui = { strategy: 'merge' };
  });

  // 2. add config template
  const configTemplate = addTemplate({
    filename: 'nuxtui-tailwind.config.cjs',
    write: true,
    // eslint
    getContents: (_) => `
      const { defaultExtractor: createDefaultExtractor } = require('tailwindcss/lib/lib/defaultExtractor.js')
      const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })

      module.exports = {
        plugins: [
          require('@tailwindcss/forms'),
          require('tailwindcss-animate'),
          iconsPlugin(${Array.isArray(moduleOptions.icons) || moduleOptions.icons === 'all' ? `{ collections: getIconCollections(${JSON.stringify(moduleOptions.icons)}) }` : typeof moduleOptions.icons === 'object' ? JSON.stringify(moduleOptions.icons) : {}})
        ],
        content: {
          files: [
            ${JSON.stringify(resolve(runtimeDir, 'components/**/*.{vue,mjs,ts}'))},
            ${JSON.stringify(resolve(runtimeDir, 'ui.config/**/*.{mjs,js,ts}'))}
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\\r\\n|\\r|\\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content)
              ]
            }
          }
        }
      }
    `,
  });

  // 3. install module
  await installModule(
    '@nuxtjs/tailwindcss',
    defu(
      {
        viewer: false,
        config: { darkMode: 'class' },
        configPath: [configTemplate.dst, join(nuxt.options.rootDir, 'tailwind.config')],
      },
      nuxt.options.tailwindcss,
    ),
  );
}
