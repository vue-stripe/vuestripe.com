<template>
  <main>
    <h1>Partners</h1>
  </main>
</template>

<script>
// import { onMounted, ref } from 'vue';
import { useSeoMeta, definePageMeta } from '#imports';
export default {
  setup () {
    definePageMeta({
      layout: 'default',
    });

    const metaTitle = 'Partners - Vue Stripe';
    const metaDescription = 'Partners of Vue Stripe.';

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
