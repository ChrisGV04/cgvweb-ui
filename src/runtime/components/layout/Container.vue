<script setup lang="ts">
import { useAppConfig, useAttrs } from "#imports";
import { omit } from "lodash-es";
import { computed, type PropType } from "vue";
import type { UiContainerConfig } from "../../types";
import { defuTwMerge } from "../../utils";
// @ts-expect-error
import buildAppConfig from "#build/app.config";
import { twJoin, twMerge } from "tailwind-merge";

type UiConfig = Partial<UiContainerConfig>;

defineOptions({ inheritAttrs: false });
const attrs = useAttrs();

const props = defineProps({
  as: { type: String, default: "div" },
  ui: {
    type: Object as PropType<UiConfig>,
    default: (): UiConfig => buildAppConfig.ui.container,
  },
});

// Merge UI config
const appConfig = useAppConfig();
const ui = computed<UiConfig>(() =>
  defuTwMerge({}, props.ui, appConfig.ui.container)
);

const containerClass = computed(() => {
  return twMerge(
    twJoin(
      ui.value.base,
      ui.value.xPadding,
      ui.value.yPadding,
      ui.value.constrained
    ),
    attrs.class as string
  );
});
</script>

<template>
  <component :is="as" :class="containerClass" v-bind="omit(attrs, ['class'])">
    <slot />
  </component>
</template>
