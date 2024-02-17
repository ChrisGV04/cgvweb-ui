<script setup lang="ts">
import { UiContainer, UiLink } from '#components';
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Link</h1>
    <p class="demo-page-description">
      A basic link with additional options that extend the
      <code>NuxtLink</code>.
    </p>

    <div id="content" class="demo-category-container mt-4">
      <span class="demo-category-title">Example</span>

      <div class="mt-2 flex items-center gap-4">
        <UiLink to="/dialog" class="data-[active]:text-primary-700">Default link</UiLink>
        <UiLink to="/link" class="data-[active]:text-primary-500">Active link</UiLink>
        <UiLink exact-query to="/link?term=query" class="data-[active]:text-primary-500">Exact query</UiLink>
        <UiLink exact-hash to="/link#content" class="data-[active]:text-primary-500 text-gray-900">
          Exact hash
        </UiLink>
      </div>
    </div>
  </UiContainer>
</template>
