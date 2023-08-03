<template>
  <main class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <h1 data-aos="fade-down" class="text-4xl md:text-7xl font-bold mb-6"><span>Vue</span> <span class="text-primary">Stripe</span> 💳</h1>
        <p data-aos="fade-down" class="text-xl md:text-2xl font-medium mb-6">
          {{metaDescription}}
        </p>
        <div class="flex justify-center gap-2">
          <nuxt-link
            class="btn btn-primary"
            to="/docs"
          >
            Get Started
            <i class="las la-play text-3xl"></i>
          </nuxt-link>
          <nuxt-link
            class="btn hover:btn-secondary btn-outline"
            to="/docs/components/address-element"
          >
            Components
            <i class="las la-cubes text-3xl"></i>
          </nuxt-link>
          <nuxt-link
            class="btn hover:btn-secondary btn-outline"
            to="/docs/composables/use-stripe"
          >
            Composables
            <i class="las la-plug text-3xl"></i>
          </nuxt-link>
        </div>
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

    const metaTitle = 'Home - Vue Stripe';
    const metaDescription = 'Vue.js components and composables for Stripe Checkout, Elements, and more.';

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
      metaDescription,
    };
  },
};
</script>
