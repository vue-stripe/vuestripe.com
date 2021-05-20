<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-1 Vue Stripe Plugin
      page-alert(content="Vue.js plugin for Stripe JS Object.")
      p Maybe you don't need the checkout, or the elements. Maybe you just need to access the other methods provided by the Stripe JS SDK. This plugin will help you do that.
      carbon-ads(v-if="$isMobile")
    v-col(cols="12")
      h2.mb-5 Step 1 - Import Stripe JavaScript SDK
      install-stripe-js-sdk
    v-col(cols="12")
      h2.mb-5 Step 2 - Install The Plugin
      p Import and register the #[code StripePlugin] plugin.
      code-snip(lang="language-javascript") {{elementsPluginUsage}}
      p This will give you access to #[code this.$stripe], Where #[code this.$stripe] = #[code window.Stripe(PUBLISHABLE_KEY, options)].
      p With this, you can now access the Stripe methods like, #[code .confirmCardPayment], #[code .confirmAlipayPayment], and more. See #[a(src="https://stripe.com/docs/js/payment_intents" rel="noreferrer noopener") here].
    v-col(cols="12")
      h2.mb-5 Example
      p #[i Coming Soon]
      small See the dev console, I printed the #[code this.$stripe] for your reference.
</template>

<script>
import headMeta from '~/utils/head-meta';
import PageAlert from '~/components/commons/page-alert';
import CodeSnip from '~/components/commons/code-snippet';
import InstallStripeJsSdk from '~/components/commons/install-stripe-js-sdk';
import addStripeSdk from '~/assets/snippets/stripe-elements/plugin-usage-add-sdk.md';
import elementsPluginUsage from '~/assets/snippets/stripe-plugin/plugin-usage.md';
export default {
  layout: 'docs',
  components: {
    PageAlert,
    CodeSnip,
    InstallStripeJsSdk,
  },
  data () {
    this.addStripeSdk = addStripeSdk;
    this.elementsPluginUsage = elementsPluginUsage;
    return {};
  },
  mounted () {
    console.warn('this.$stripe', this.$stripe);
  },
  methods: {},
  head () {
    return headMeta({
      title: 'Stripe Plugin - Vue Stripe Plugin',
      description: 'How to use Stripe SDK in Vue',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>

<style scoped>
#custom-button {
  height: 30px;
  outline: 1px solid grey;
  background-color: green;
  padding: 5px;
  color: white;
}

#card-error {
  color: red;
}
</style>
