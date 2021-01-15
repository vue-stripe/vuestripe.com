<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        h1.mb-5 Nuxt Demo
        page-alert(content="Vue Stripe Checkout can also be implemented with Nuxt.js")
        carbon-ads
      v-col(cols="12" md="10")
        h1.mb-5 Helpful Links
        v-card
          v-card-text
            ul
              template(v-for="link in links")
                li {{link.name}} - #[a(:href="link.link" rel="noopener noreferrer") {{link.link}}]
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
