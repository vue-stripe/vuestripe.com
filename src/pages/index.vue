<template>
  <main class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <h1 data-aos="fade-down" class="text-4xl md:text-7xl font-bold mb-6"><span>Vue</span> <span class="text-stripe-purple">Stripe</span> 💳</h1>
        <h1 data-aos="fade-down" class="text-4xl md:text-4xl font-bold mb-6">Stripe Checkout & Elements for Vue.js</h1>
        <nuxt-link class="btn btn-primary" to="/docs">Get Started</nuxt-link>
      </div>
    </div>
  </main>

</template>

<script>
import { definePageMeta, useSeoMeta } from '#imports';
import { SOCIAL_LINKS } from '~/constants';
import ogBanner from '../assets/images/og-banner.png';

export default {
  setup () {
    definePageMeta({
      layout: 'default',
    });

    const metaTitle = 'Home - Joff Tiquez';
    const metaDescription = 'Web Developer from 🇵🇭';

    useSeoMeta({
      title: metaTitle,
      ogTitle: metaTitle,
      description: metaDescription,
      ogDescription: metaDescription,
      image: ogBanner,
      ogImage: ogBanner,
      url: 'https://jofftiquez.com/gui',
      ogUrl: 'https://jofftiquez.com/gui',
      twitterCard: 'summary_large_image',
    });

    return {
      socialLinks: SOCIAL_LINKS,
    };
  },
};
</script>
