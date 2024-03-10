<script setup lang="ts">
import { UiCmsRichText, UiContainer } from '#components';

const data: any = [
  {
    children: [
      {
        text: 'This is a basic example of ',
      },
      { text: 'Rich Text', bold: true },
      { text: ' being rendered. This is designed to work with ' },
      {
        type: 'link',
        bold: true,
        newTab: true,
        linkType: 'custom',
        url: 'https://payloadcms.com/',
        children: [{ text: "PayloadCMS's rich text field" }],
      },
      {
        text: ' but it could possibly work with Slate data since itself powers PayloadCMS.',
      },
    ],
  },
  {
    type: 'ol',
    children: [
      {
        type: 'li',
        children: [{ text: 'Supports leafs and multiple elements;' }],
      },
      {
        type: 'li',
        children: [{ text: 'Style it using @tailwindcss/typography;' }],
      },
      { type: 'li', children: [{ text: 'Simple;', bold: true }] },
    ],
  },
  {
    type: 'upload',
    value: {
      id: '64604b3111c6720b71b37b20',
      alt: 'CGV WEB logo',
      filename: 'profile-compressed.webp',
      mimeType: 'image/webp',
      filesize: 15224,
      width: 512,
      height: 512,
      createdAt: '2023-05-14T02:45:05.931Z',
      updatedAt: '2024-01-10T18:43:53.944Z',
      url: 'https://cgvweb.com/logo/cgvweb-logo-box.svg',
    },
    relationTo: 'uploads',
    children: [{ text: ' ' }],
  },
];
</script>

<template>
  <UiContainer class="py-8">
    <h1 class="demo-page-title">CMS Rich Text</h1>
    <p class="demo-page-description">
      Funcional component used to render rich text. It's built specifically for PayloadCMS and Slate.
    </p>

    <UiCmsRichText
      :content="data"
      class="prose md:prose-lg prose-headings:text-left prose-a:text-primary-600 hover:prose-a:text-primary-400 prose-li:marker:text-primary-600 mt-16 max-w-none rounded-lg border border-gray-900/10 bg-gray-100 p-4 text-justify"
    >
      <template #upload="{ node }">
        <img v-if="node.value?.url" :src="node.value.url" :alt="node.value.alt" />
      </template>
    </UiCmsRichText>
  </UiContainer>
</template>
