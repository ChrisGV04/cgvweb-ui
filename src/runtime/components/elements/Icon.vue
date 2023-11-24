<script lang="ts">
import { Icon } from "#components";
import { useAppConfig } from "#imports";
import { computed, defineComponent } from "vue";

export default defineComponent({
  components: { Icon },
  props: {
    name: { type: String, required: true },
    dynamic: { type: Boolean, default: false },
  },
  setup(props) {
    const appConfig = useAppConfig();

    const isDynamic = computed<boolean>(
      // @ts-ignore
      () => props.dynamic || !!appConfig.ui?.icons?.dynamic,
    );

    return { isDynamic };
  },
});
</script>

<template>
  <Icon v-if="isDynamic" :name="name" aria-hidden="true" />
  <span v-else :class="name" aria-hidden="true" />
</template>
