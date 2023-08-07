<script setup lang="ts">
const data: any = [
  {
    children: [
      {
        text: "This is a basic example of ",
      },
      { text: "Rich Text", bold: true },
      { text: " being rendered. This is designed to work with " },
      {
        type: "link",
        bold: true,
        newTab: true,
        linkType: "custom",
        url: "https://payloadcms.com/",
        children: [{ text: "PayloadCMS's rich text field" }],
      },
      {
        text: " but it could possibly work with Slate data since itself powers PayloadCMS.",
      },
    ],
  },
  {
    type: "ol",
    children: [
      {
        type: "li",
        children: [{ text: "Supports leafs and multiple elements;" }],
      },
      {
        type: "li",
        children: [{ text: "Style it using @tailwindcss/typography;" }],
      },
      { type: "li", children: [{ text: "Simple;" }] },
    ],
  },
];
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">CMS Rich Text</h1>
    <p class="demo-page-description">
      Funcional component used to render rich text. It's built specifically for
      PayloadCMS and Slate.
    </p>

    <UiCmsRichText
      :content="data"
      class="mt-16 bg-gray-100 p-4 rounded-lg border border-gray-900/10 prose max-w-none text-justify md:prose-lg prose-headings:text-left prose-a:text-primary-600 hover:prose-a:text-primary-400 prose-li:marker:text-primary-600"
    />
  </UiContainer>
</template>
