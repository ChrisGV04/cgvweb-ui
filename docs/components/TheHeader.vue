<script setup lang="ts">
import { UiIcon } from "#components";
import { useRuntimeConfig } from "#imports";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import type { RouteLocationRaw } from "vue-router";

interface NavigationItem {
  name: string;
  route?: RouteLocationRaw;
  children?: Omit<NavigationItem, "children">[];
}

const env = useRuntimeConfig();

const navigation: NavigationItem[] = [
  {
    name: "Elements",
    children: [
      { name: "Badge", route: "/badge" },
      { name: "Icon", route: "/icon" },
      { name: "Link", route: "/link" },
      { name: "Button", route: "/button" },
      { name: "Highlights", route: "/highlights" },
    ],
  },
  {
    name: "Data",
    children: [{ name: "Rich Text", route: "/rich-text" }],
  },
  {
    name: "Layout",
    children: [{ name: "Marquee", route: "/marquee" }],
  },
  {
    name: "Overlays",
    children: [
      { name: "Dialog", route: "/dialog" },
      { name: "Slideover", route: "/slideover" },
      { name: "Tooltip", route: "/tooltip" },
      { name: "Breakpoint Viewer", route: "/breakpoints" },
    ],
  },
];
</script>

<template>
  <header class="border-b border-gray-900/10 bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/">
          <span class="text-lg font-semibold text-gray-900">CGV WEB UI</span>
        </NuxtLink>
      </div>

      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <template v-for="item in navigation">
          <NuxtLink
            v-if="item.route"
            :to="item.route"
            class="text-sm font-semibold leading-6 text-gray-900"
            >{{ item.name }}</NuxtLink
          >

          <Popover v-if="item.children" class="relative" v-slot="{ close }">
            <PopoverButton
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              {{ item.name }}
              <UiIcon
                name="i-heroicons-chevron-down-20-solid"
                class="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5"
              >
                <NuxtLink
                  @click="close"
                  :key="child.name"
                  :to="child.route"
                  v-for="child in item.children"
                  class="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >{{ child.name }}</NuxtLink
                >
              </PopoverPanel>
            </Transition>
          </Popover>
        </template>
      </PopoverGroup>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        v{{ env.public.version }}
      </div>
    </nav>
  </header>
</template>
