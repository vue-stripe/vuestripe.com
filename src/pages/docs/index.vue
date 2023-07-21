<template>
  <main>
    <b>Hello HAHAHA</b>
    <ContentDoc path="/docs/about" />
  </main>
</template>

<script>
// import { onMounted, ref } from 'vue';
import { useSeoMeta, definePageMeta } from '#imports';
export default {
  setup () {
    definePageMeta({
      layout: 'blank',
    });

    const metaTitle = 'Home - Joff Tiquez';
    const metaDescription = 'Web Developer from 🇵🇭';

    useSeoMeta({
      title: metaTitle,
      ogTitle: metaTitle,
      description: metaDescription,
      ogDescription: metaDescription,
      // image: ogBanner,
      // ogImage: ogBanner,
      url: 'https://jofftiquez.com/gui',
      ogUrl: 'https://jofftiquez.com/gui',
      twitterCard: 'summary_large_image',
    });
  },
};
</script>
