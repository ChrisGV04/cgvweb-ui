import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";
import {
  addComponentsDir,
  addImportsDir,
  createResolver,
  defineNuxtModule,
  installModule,
  resolvePath,
} from "@nuxt/kit";
import { name, version } from "../package.json";
import appConfig from "./runtime/app.config";

type DeepPartial<T> = Partial<{
  [P in keyof T]: DeepPartial<T[P]> | { [key: string]: string };
}>;

declare module "@nuxt/schema" {
  interface AppConfigInput {
    ui?: DeepPartial<typeof appConfig.ui>;
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
      nuxt: "^3.0.0-rc.8",
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

    nuxt.options.css.push(resolve(runtimeDir, "ui.css"));

    const appConfigFile = await resolvePath(resolve(runtimeDir, "app.config"));
    nuxt.hook("app:resolve", (app) => {
      app.configs.push(appConfigFile);
    });

    nuxt.hook("tailwindcss:config", function (tailwindConfig) {
      tailwindConfig.plugins = tailwindConfig.plugins || [];
      tailwindConfig.plugins.push(
        iconsPlugin({ collections: getIconCollections(options.icons as any[]) })
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
