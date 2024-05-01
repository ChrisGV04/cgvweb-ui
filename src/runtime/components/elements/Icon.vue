<script setup lang="ts">
import { Icon } from '#components';
import { useAppConfig } from '#imports';
import { computed } from 'vue';

const props = defineProps({
  dynamic: Boolean,
  name: { type: String, required: true },
});
const appConfig = useAppConfig();

// @ts-expect-error For some reason, the icons are not included in the appConfig.ui type
const isDynamic = computed<boolean>(() => props.dynamic || !!appConfig.ui?.icons?.dynamic);
</script>

<template>
  <Icon v-if="isDynamic" :name="name" aria-hidden="true" />
  <span v-else :class="name" aria-hidden="true" />
</template>
