import type { CollectionNames, IconsPluginOptions } from '@egoist/tailwindcss-icons';
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import { addComponentsDir, addImportsDir, createResolver, defineNuxtModule, installModule } from '@nuxt/kit';
import twForms from '@tailwindcss/forms';
import twAnimate from 'tailwindcss-animate';
import { name, version } from '../package.json';
import type { DeepPartial, Strategy } from './runtime/types';
import * as config from './runtime/ui.config';

type UI = {
  strategy?: Strategy;
  icons?: { dynamic: boolean };
} & DeepPartial<typeof config>;

declare module 'nuxt/schema' {
  interface AppConfigInput {
    ui?: UI;
  }
}
declare module '@nuxt/schema' {
  interface AppConfigInput {
    ui?: UI;
  }
}

export interface ModuleOptions {
  /**
   * @default 'u'
   */
  prefix?: string;

  /**
   * @default false
   */
  global?: boolean;

  icons: CollectionNames[] | 'all' | IconsPluginOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'ui',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    prefix: 'Ui',
    icons: ['heroicons'],
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Transpile runtime
    const runtimeDir = resolve('./runtime');
    nuxt.options.build.transpile.push(runtimeDir);
    nuxt.options.build.transpile.push('@floating-ui/vue', '@headlessui/vue');

    nuxt.options.alias['#ui'] = runtimeDir;

    nuxt.options.css.push(resolve(runtimeDir, 'ui.css'));

    nuxt.hook('tailwindcss:config', function (tailwindConfig) {
      // @ts-ignore
      nuxt.options.appConfig.ui = { strategy: 'merge' };

      tailwindConfig.plugins = tailwindConfig.plugins || [];

      tailwindConfig.plugins.push(
        iconsPlugin(
          Array.isArray(options.icons) || options.icons === 'all'
            ? { collections: getIconCollections(options.icons) }
            : typeof options.icons === 'object'
              ? options.icons
              : {},
        ),
      );
    });

    // Modules

    await installModule('nuxt-icon');
    await installModule('@nuxtjs/tailwindcss', {
      viewer: false,
      config: {
        content: [
          resolve(runtimeDir, 'components/**/*.{vue,mjs,ts}'),
          resolve(runtimeDir, 'ui.config/**/*.{mjs,js,ts}'),
        ],
        plugins: [twAnimate, twForms],
      },
    });

    // Components

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'elements'),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    });
    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'data'),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    });
    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'layout'),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    });
    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'overlays'),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    });
    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'forms'),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    });

    // Composables

    addImportsDir(resolve(runtimeDir, 'composables'));
  },
});
