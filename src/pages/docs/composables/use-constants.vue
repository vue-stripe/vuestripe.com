<template>
  <main>
    <h1>useConstants</h1>
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

    const metaTitle = 'useConstants - Vue Stripe Components';
    const metaDescription = 'useConstants for Vue Stripe Components.';

    useSeoMeta({
      title: metaTitle,
      ogTitle: metaTitle,
      description: metaDescription,
      ogDescription: metaDescription,
      // image: ogBanner,
      // ogImage: ogBanner,
      // url: 'https://jofftiquez.com/gui',
      // ogUrl: 'https://jofftiquez.com/gui',
      twitterCard: 'summary_large_image',
    });
  },
};
</script>
