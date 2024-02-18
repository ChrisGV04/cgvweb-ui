<script setup lang="ts">
import { UiButton, UiDropdown } from '#components';
import { useRuntimeConfig } from '#imports';
import type { DropdownItem } from '#ui/types';

const env = useRuntimeConfig();

const elementsLinks: DropdownItem[] = [
  { label: 'Badge', to: '/badge' },
  { label: 'Icon', to: '/icon' },
  { label: 'Link', to: '/link' },
  { label: 'Button', to: '/button' },
  { label: 'Dropdown Menu', to: '/dropdown' },
];

const dataLinks: DropdownItem[] = [
  { label: 'Rich Text', to: '/rich-text' },
  { label: 'Highlights', to: '/highlights' },
];

const layoutLinks: DropdownItem[] = [{ label: 'Marquee', to: '/marquee' }];

const overlayLinks: DropdownItem[] = [
  { label: 'Dialog', to: '/dialog' },
  { label: 'Slideover', to: '/slideover' },
  { label: 'Tooltip', to: '/tooltip' },
  { label: 'Breakpoint Viewer', to: '/breakpoints' },
];

const formLinks: DropdownItem[] = [
  { label: 'Input', to: '/input' },
  { label: 'Switch', to: '/switch' },
  { label: 'Checkbox', to: '/checkbox' },
];
</script>

<template>
  <header class="border-b border-gray-900/10 bg-white">
    <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div class="flex lg:flex-1">
        <NuxtLink to="/">
          <span class="text-lg font-semibold text-gray-900">CGV WEB UI</span>
        </NuxtLink>
      </div>

      <nav class="hidden lg:flex lg:gap-x-6">
        <UiDropdown :items="[elementsLinks]">
          <UiButton label="Elements" variant="black-ghost" right-icon="i-heroicons-chevron-down-20-solid" />
        </UiDropdown>
        <UiDropdown :items="[dataLinks]">
          <UiButton label="Data" variant="black-ghost" right-icon="i-heroicons-chevron-down-20-solid" />
        </UiDropdown>
        <UiDropdown :items="[layoutLinks]">
          <UiButton label="Layout" variant="black-ghost" right-icon="i-heroicons-chevron-down-20-solid" />
        </UiDropdown>
        <UiDropdown :items="[overlayLinks]">
          <UiButton label="Overlays" variant="black-ghost" right-icon="i-heroicons-chevron-down-20-solid" />
        </UiDropdown>
        <UiDropdown :items="[formLinks]">
          <UiButton label="Forms" variant="black-ghost" right-icon="i-heroicons-chevron-down-20-solid" />
        </UiDropdown>
      </nav>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">v{{ env.public.version }}</div>
    </nav>
  </header>
</template>
