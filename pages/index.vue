<template lang="pug">
  v-container(fill-height)
    //- div(v-if="!$isMobile" style="position: absolute; top: 10px; left: 10px; width: 130px;")
    //-   carbon-ads
    v-row(justify="center" align="center")
      v-col(cols="12" md="12").text-center
        img(:width="$isMobile ? '150' : '250'" src="../assets/images/vue-stripe-logo-variant-1-small.png")
        br
        a(href="https://stripe.com/partners/vue-stripe" target="_blank")
          img(width="180" src="../assets/images/stripe_partner_badge_verified_blurple.png")
        h1(:style="{ 'font-size': $isMobile ? '40px' : '70px' }") Vue #[span.primary--text Stripe] 💳
        h2 Stripe Checkout & Elements for Vue.js
        br
        carbon-ads
        v-btn(
          x-large
          color="primary"
          outlined
          rounded
          href="https://docs.vuestripe.com/vue-stripe/stripe-checkout"
          :block="$isMobile"
        ).mx-1.my-1.text-none Stripe Checkout
        v-btn(
          x-large
          color="primary"
          outlined
          rounded
          href="https://docs.vuestripe.com/vue-stripe/stripe-elements"
          :block="$isMobile"
        ).mx-1.my-1.text-none Stripe Elements
        v-btn(
          x-large
          color="primary"
          outlined
          rounded
          href="https://github.com/vue-stripe/vue-stripe"
          rel="noreferrer noopener"
          target="_blank"
          :block="$isMobile"
        ).mx-1.my-1.text-none GitHub
        v-btn(
          x-large
          color="primary"
          outlined
          rounded
          href="https://opencollective.com/vue-stripe-checkout"
          rel="noreferrer noopener"
          target="_blank"
          :block="$isMobile"
        ).mx-1.my-1.text-none Open Collective
        v-btn(
          x-large
          color="primary"
          rounded
          depressed
          :block="$isMobile"
          :to="{ name: 'stripe-checkout-getting-started' }"
        ).mx-1.my-1.text-none Get Started
</template>

<script>
import headMeta from '~/utils/head-meta';
export default {
  data () {
    this.pk = process.env.STRIPE_PK;
    return {
      loading: false,
      items: [
        {
          sku: 'sku_FdQKocNoVzznpJ',
          quantity: 1,
        },
      ],
    };
  },
  computed: {
    successUrl () {
      return process.browser ? `${window.location.origin}/success` : '';
    },
    cancelUrl () {
      return process.browser ? `${window.location.origin}/cancel` : '';
    },
  },
  methods: {
    checkout () {
      this.loading = true;
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  head () {
    return headMeta({
      title: 'Stripe Checkout & Elements for Vue.js - Vue Stripe',
      description: 'Vue Stripe Stripe Checkout & Vue Stripe Elements',
      socialBanner: require('../assets/images/home.png'),
    });
  },
};
</script>

<style scoped>
h1 {
  font-size: 70px;
}
</style>
