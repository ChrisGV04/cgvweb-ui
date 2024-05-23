import type { CollectionNames, IconsPluginOptions } from '@egoist/tailwindcss-icons';
import type { DeepPartial, Strategy } from './runtime/types';
import type * as config from './runtime/ui.config';

import { addComponentsDir, createResolver, defineNuxtModule, installModule } from '@nuxt/kit';
import { name, version } from '../package.json';
import installTailwind from './tailwind';

/** Adds strategy to every key of the object */
type WithStrategy<Config extends object> = { [Key in keyof Config]: Config[Key] & { strategy?: Strategy } };
type UI = { icons?: { dynamic: boolean } } & DeepPartial<WithStrategy<typeof config>>;

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

    nuxt.options.alias['#ui'] = runtimeDir;

    nuxt.options.css.push(resolve(runtimeDir, 'ui.css'));

    // Modules

    await installModule('nuxt-icon');
    await installTailwind(options, nuxt, resolve);

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
  },
});
