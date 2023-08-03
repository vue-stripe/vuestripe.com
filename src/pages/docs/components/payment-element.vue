<template>
  <main>
    <h1>Payment Element</h1>
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

    const metaTitle = 'Payment Element - Vue Stripe Components';
    const metaDescription = 'Payment Element for Vue Stripe Components.';

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
