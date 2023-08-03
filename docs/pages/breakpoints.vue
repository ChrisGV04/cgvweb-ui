<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">Breakpoint viewer</h1>
    <p class="demo-page-description">
      Small indicator at the bottom of the viewport that shows the current
      Tailwind CSS breakpoint.
    </p>

    <DevOnly>
      <ClientOnly>
        <UiBreakpointViewer />
      </ClientOnly>
    </DevOnly>
  </UiContainer>
</template>
