<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-1 Create a PaymentMethod
      page-alert(content="PaymentMethod objects represent your customer's payment instruments. They can be used with PaymentIntents to collect payments or saved to Customer objects to store instrument details for future payments.")
      carbon-ads(v-if="$isMobile")
      v-col(cols="12")
        h1.mb-5 1. Setup the Vue Stripe plugin
        p Import and register the #[code StripePlugin] plugin.
        code-snip(lang="language-javascript") {{elementsPluginUsage}}
        p This will give you access to #[code this.$stripe], Where #[code this.$stripe] = #[code window.Stripe(PUBLISHABLE_KEY, options)].
        h1.mb-1 2. Create a PaymentMethod
        p Use #[code this.$stripe.createPaymentMethod] to convert payment information collected by elements into a PaymentMethod object that you safely pass to your server to use in an API call.
</template>

<script>
import headMeta from '~/utils/head-meta';
import PageAlert from '~/components/commons/page-alert';
import CodeSnip from '~/components/commons/code-snippet';
import addStripeSdk from '~/assets/snippets/stripe-elements/plugin-usage-add-sdk.md';
import elementsPluginUsage from '~/assets/snippets/stripe-plugin/plugin-usage.md';
export default {
  layout: 'docs',
  components: {
    CodeSnip,
    PageAlert,
  },
  data () {
    this.addStripeSdk = addStripeSdk;
    this.elementsPluginUsage = elementsPluginUsage;
    return {};
  },
  mounted () {
    console.warn('this.$stripe', this.$stripe);
  },
  head () {
    return headMeta({
      title: 'Payment Methods - Vue Stripe Payment Methods',
      description: 'Create a PaymentMethod using Vue Stripe',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
