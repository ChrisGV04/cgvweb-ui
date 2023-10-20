import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";
import type { Strategy } from "@floating-ui/vue";
import {
  addComponentsDir,
  addImportsDir,
  createResolver,
  defineNuxtModule,
  installModule,
} from "@nuxt/kit";
import { name, version } from "../package.json";
import type { DeepPartial } from "./runtime/types";
import * as config from "./runtime/ui.config";

type UI = {
  strategy?: Strategy;
  [key: string]: any;
} & DeepPartial<typeof config>;

declare module "nuxt/schema" {
  interface AppConfigInput {
    ui?: UI;
  }
}
declare module "@nuxt/schema" {
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

  icons: string[] | string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "ui",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    prefix: "Ui",
    icons: ["heroicons"],
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Transpile runtime
    const runtimeDir = resolve("./runtime");
    nuxt.options.build.transpile.push(runtimeDir);
    nuxt.options.build.transpile.push("@floating-ui/vue", "@headlessui/vue");

    nuxt.options.alias["#ui"] = runtimeDir;

    nuxt.options.css.push(resolve(runtimeDir, "ui.css"));

    nuxt.hook("tailwindcss:config", function (tailwindConfig) {
      // @ts-ignore
      nuxt.options.appConfig.ui = { strategy: "merge" };

      tailwindConfig.plugins = tailwindConfig.plugins || [];
      tailwindConfig.plugins.push(
        iconsPlugin({
          collections: getIconCollections(options.icons as any[]),
        }),
      );
    });

    // Modules

    await installModule("@nuxtjs/tailwindcss", {
      viewer: false,
      config: {
        content: [
          resolve(runtimeDir, "components/**/*.{vue,mjs,ts}"),
          resolve(runtimeDir, "*.{mjs,js,ts}"),
        ],
      },
    });

    // Components

    addComponentsDir({
      path: resolve(runtimeDir, "components", "elements"),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "data"),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "layout"),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "overlays"),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    });

    // Composables

    addImportsDir(resolve(runtimeDir, "composables"));
  },
});
