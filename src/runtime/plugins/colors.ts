import { computed } from "vue";
import { hexToRgb } from "../utils";
import { defineNuxtPlugin, useHead, useAppConfig, useNuxtApp } from "#imports";
import colors from "#tailwind-config/theme/colors";

export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig();
  const nuxtApp = useNuxtApp();

  const root = computed(() => {
    const primary: Record<string, string> | undefined =
      colors[appConfig.ui.primary];
    const gray: Record<string, string> | undefined = colors[appConfig.ui.gray];

    if (!primary) {
      console.warn(
        `[@cgv.web/ui] Primary color '${appConfig.ui.primary}' not found in Tailwind config`
      );
    }
    if (!gray) {
      console.warn(
        `[@cgv.web/ui] Gray color '${appConfig.ui.gray}' not found in Tailwind config`
      );
    }

    // Setup the primary and gray CSS variables for each shade
    return `:root {
${Object.entries(primary || colors.green)
  .map(([key, value]) => `--color-primary-${key}: ${hexToRgb(value)};`)
  .join("\n")}
${Object.entries(gray || colors.cool)
  .map(([key, value]) => `--color-gray-${key}: ${hexToRgb(value)};`)
  .join("\n")}
}`;
  });

  // Head
  const headData: any = {
    style: [
      {
        innerHTML: () => root.value,
        tagPriority: -2,
        id: "cgvweb-ui-colors",
      },
    ],
  };

  // SPA mode
  if (
    process.client &&
    nuxtApp.isHydrating &&
    !nuxtApp.payload.serverRendered
  ) {
    const style = document.createElement("style");

    style.innerHTML = root.value;
    style.setAttribute("data-cgvweb-ui-colors", "");
    document.head.appendChild(style);

    headData.script = [
      {
        innerHTML:
          "document.head.removeChild(document.querySelector('[data-cgvweb-ui-colors]'))",
      },
    ];
  }

  useHead(headData);
});
