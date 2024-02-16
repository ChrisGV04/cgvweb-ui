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

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Example</span>

      <div class="mt-2 flex items-center gap-4">
        <UiLink to="/link">Default link</UiLink>
        <UiLink to="/link" active-class="text-primary-500">Active link</UiLink>
        <UiLink exact-query to="/link?term=query" active-class="text-primary-500"
          >Active when exact query</UiLink
        >
      </div>
    </div>
  </UiContainer>
</template>
