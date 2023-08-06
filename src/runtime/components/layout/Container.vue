<script setup lang="ts">
import { useAppConfig } from "#imports";
import { defu } from "defu";
import { computed, type PropType } from "vue";
import type { UiContainerConfig } from "../../types";
// @ts-expect-error
import buildAppConfig from "#build/app.config";

type UiConfig = Partial<UiContainerConfig>;

const props = defineProps({
  as: { type: String, default: "div" },
  ui: {
    type: Object as PropType<UiConfig>,
    default: (): UiConfig => buildAppConfig.ui.container,
  },
});

// Merge UI config
const appConfig = useAppConfig();
const ui = computed<UiConfig>(() => defu({}, props.ui, appConfig.ui.container));
</script>

<template>
  <component
    :is="as"
    :class="[ui.base, ui.xPadding, ui.yPadding, ui.constrained]"
  >
    <slot />
  </component>
</template>
