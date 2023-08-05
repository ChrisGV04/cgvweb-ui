<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Button</h1>
    <p class="demo-page-description">Basic action button.</p>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Primary</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton label="Solid" />
        <UiButton label="Soft" variant="soft" />
        <UiButton label="Ghost" variant="ghost" />
        <UiButton label="Link" variant="link" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">White</span>

      <div class="mt-2 flex items-center p-4 bg-gray-900 rounded-md gap-4">
        <UiButton label="Solid" color="white" />
        <UiButton label="Soft" color="white" variant="soft" />
        <UiButton label="Ghost" color="white" variant="ghost" />
        <UiButton label="Link" color="white" variant="link" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Black</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton label="Solid" color="black" />
        <UiButton label="Soft" color="black" variant="soft" />
        <UiButton label="Ghost" color="black" variant="ghost" />
        <UiButton label="Link" color="black" variant="link" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">With icons</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton
          label="Leading"
          leading-icon="i-heroicons-lock-closed-20-solid"
        />
        <UiButton
          color="white"
          label="Trailing"
          leading-icon="i-heroicons-lock-closed-20-solid"
        />
        <UiButton loading color="black" label="Loading" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Disabled</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton disabled label="Primary" />
        <UiButton disabled label="White" color="white" />
        <UiButton disabled label="Black" color="black" />
      </div>
    </div>

    <div class="demo-category-container mt-4">
      <span class="demo-category-title">Sizes</span>

      <div class="mt-2 flex items-center gap-4">
        <UiButton label="X-Small" size="xs" />
        <UiButton label="Small" />
        <UiButton label="Medium" size="md" />
      </div>
    </div>

    <div class="demo-category-container items-start mt-4">
      <span class="demo-category-title">As link</span>

      <UiButton
        class="mt-2"
        target="_blank"
        label="Go to CGV WEB"
        to="https://cgvweb.com"
        leading-icon="i-heroicons-arrow-top-right-on-square-20-solid"
      />
    </div>
  </UiContainer>
</template>
