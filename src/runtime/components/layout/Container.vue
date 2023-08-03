<script setup lang="ts">
import { useAppConfig } from "#imports";
import { defu } from "defu";
import { computed, type PropType } from "vue";
import typeAppConfig from "../../app.config";
// @ts-expect-error
import buildAppConfig from "#build/app.config";

type UiConfig = Partial<typeof typeAppConfig.ui.container>;

const props = defineProps({
  as: { type: String, default: "div" },
  ui: {
    type: Object as PropType<UiConfig>,
    default: (): UiConfig => buildAppConfig.ui.container,
  },
});

// Merge UI config
const appConfig = useAppConfig();
console.log(appConfig.ui.container);

const ui = computed<UiConfig>(() => defu({}, props.ui, appConfig.ui.container));
</script>

<template>
  <component :is="as" :class="[ui.base, ui.padding, ui.constrained]">
    <slot />
  </component>
</template>
