<script setup lang="ts">
import { UiBadge, UiContainer } from '#components';
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Badges</h1>
    <p class="demo-page-description">Display small pieces of information more visually.</p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Subtle</span>

      <div class="mt-2 flex flex-wrap items-center gap-4">
        <UiBadge color="red">Red</UiBadge>
        <UiBadge color="orange">Orange</UiBadge>
        <UiBadge color="amber">Amber</UiBadge>
        <UiBadge color="yellow">Yellow</UiBadge>
        <UiBadge color="lime">Lime</UiBadge>
        <UiBadge color="green">Green</UiBadge>
        <UiBadge color="emerald">Emerald</UiBadge>
        <UiBadge color="teal">Teal</UiBadge>
        <UiBadge color="cyan">Cyan</UiBadge>
        <UiBadge color="sky">Sky</UiBadge>
        <UiBadge color="blue">Blue</UiBadge>
        <UiBadge color="indigo">Indigo</UiBadge>
        <UiBadge color="violet">Violet</UiBadge>
        <UiBadge color="purple">Purple</UiBadge>
        <UiBadge color="fuchsia">Fuchsia</UiBadge>
        <UiBadge color="pink">Pink</UiBadge>
        <UiBadge color="rose">Rose</UiBadge>
        <UiBadge color="slate">Slate</UiBadge>
        <UiBadge color="gray">Gray</UiBadge>
        <UiBadge color="zinc">Zinc</UiBadge>
        <UiBadge color="neutral">Neutral</UiBadge>
        <UiBadge color="stone">Stone</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">With dot</span>

      <div class="mt-2 flex flex-wrap items-center gap-4">
        <UiBadge dot color="red">Red</UiBadge>
        <UiBadge dot color="orange">Orange</UiBadge>
        <UiBadge dot color="amber">Amber</UiBadge>
        <UiBadge dot color="yellow">Yellow</UiBadge>
        <UiBadge dot color="lime">Lime</UiBadge>
        <UiBadge dot color="green">Green</UiBadge>
        <UiBadge dot color="emerald">Emerald</UiBadge>
        <UiBadge dot color="teal">Teal</UiBadge>
        <UiBadge dot color="cyan">Cyan</UiBadge>
        <UiBadge dot color="sky">Sky</UiBadge>
        <UiBadge dot color="blue">Blue</UiBadge>
        <UiBadge dot color="indigo">Indigo</UiBadge>
        <UiBadge dot color="violet">Violet</UiBadge>
        <UiBadge dot color="purple">Purple</UiBadge>
        <UiBadge dot color="fuchsia">Fuchsia</UiBadge>
        <UiBadge dot color="pink">Pink</UiBadge>
        <UiBadge dot color="rose">Rose</UiBadge>
        <UiBadge dot color="slate">Slate</UiBadge>
        <UiBadge dot color="gray">Gray</UiBadge>
        <UiBadge dot color="zinc">Zinc</UiBadge>
        <UiBadge dot color="neutral">Neutral</UiBadge>
        <UiBadge dot color="stone">Stone</UiBadge>
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Interactive</span>

      <div class="mt-2 flex items-center gap-4">
        <div class="mt-2 flex flex-wrap items-center gap-4">
          <UiBadge interactive color="red">Red</UiBadge>
          <UiBadge interactive color="orange">Orange</UiBadge>
          <UiBadge interactive color="amber">Amber</UiBadge>
          <UiBadge interactive color="yellow">Yellow</UiBadge>
          <UiBadge interactive color="lime">Lime</UiBadge>
          <UiBadge interactive color="green">Green</UiBadge>
          <UiBadge interactive color="emerald">Emerald</UiBadge>
          <UiBadge interactive color="teal">Teal</UiBadge>
          <UiBadge interactive color="cyan">Cyan</UiBadge>
          <UiBadge interactive color="sky">Sky</UiBadge>
          <UiBadge interactive color="blue">Blue</UiBadge>
          <UiBadge interactive color="indigo">Indigo</UiBadge>
          <UiBadge interactive color="violet">Violet</UiBadge>
          <UiBadge interactive color="purple">Purple</UiBadge>
          <UiBadge interactive color="fuchsia">Fuchsia</UiBadge>
          <UiBadge interactive color="pink">Pink</UiBadge>
          <UiBadge interactive color="rose">Rose</UiBadge>
          <UiBadge interactive color="slate">Slate</UiBadge>
          <UiBadge interactive color="gray">Gray</UiBadge>
          <UiBadge interactive color="zinc">Zinc</UiBadge>
          <UiBadge interactive color="neutral">Neutral</UiBadge>
          <UiBadge interactive color="stone">Stone</UiBadge>
        </div>
      </div>
    </div>
  </UiContainer>
</template>
