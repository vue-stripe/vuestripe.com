<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        h1.mb-5 Getting Started
        v-card
          v-card-text
            p Vue Stripe Checkout is an easy to implement, and well maintained Vue.js plugin for Stripe Checkout.
      v-col(cols="12" md="10")
        h1.mb-5 Installation
        v-card
          v-card-text
            p Vue Stripe Checkout is available on NPM, or Yarn.
            h3 NPM
            code-snip(lang="language-bash") npm install @vue-stripe/vue-stripe
            h3 Yarn
            code-snip(lang="language-bash") yarn add @vue-stripe/vue-stripe
      v-col(cols="12" md="10")
        h1.mb-5 Usage
        v-card
          v-card-text
            h3 Import
            code-snip(lang="language-javascript") import { StripeCheckout } from '@vue-stripe/vue-stripe';
</template>

<script>
import headMeta from '~/utils/head-meta';
import CodeSnip from '~/components/commons/code-snippet';
export default {
  layout: 'docs',
  components: {
    CodeSnip,
  },
  head () {
    return headMeta({
      title: 'Getting Started - Vue Stripe Checkout',
      description: 'A guide on how to install vue stripe checkout',
      socialBanner: require('../../assets/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
