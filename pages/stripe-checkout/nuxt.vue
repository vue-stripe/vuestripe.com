<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-5 Nuxt Demo
      page-alert(content="Vue Stripe Checkout can also be implemented with Nuxt.js")
    v-col(cols="12")
      h1.mb-5 Helpful Links
      v-card
        v-card-text
          ul
            template(v-for="link in links")
              li {{link.name}} - #[a(:href="link.link" rel="noopener noreferrer") {{link.link}}]
    v-col(cols="12")
      carbon-ads(v-if="$isMobile")
</template>

<script>
import headMeta from '~/utils/head-meta';
import PageAlert from '~/components/commons/page-alert';
export default {
  layout: 'docs',
  components: {
    PageAlert,
  },
  data () {
    return {
      links: [
        {
          name: 'Code',
          link: 'https://github.com/jofftiquez/vue-stripe-checkout-nuxt-demo',
        },
        {
          name: 'SPA Demo on Firebase Hosting',
          link: 'https://vue-stripe-checkout-nuxt-demo.web.app',
        },
        {
          name: 'SSR Demo on Heroku',
          link: 'https://vue-stripe-checkout-nuxt-demo.herokuapp.com',
        },
      ],
    };
  },
  head () {
    return headMeta({
      title: 'Nuxt.js - Vue Stripe Checkout',
      description: 'How to use Stripe Checkout on Nuxt?',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
