<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-5 Google Pay & Apple Pay
      page-alert(content="Google Pay & Apple Pay are automatically supported by Stripe Checkout.")
      p No configuration or integration changes are required to enable Apple Pay or Google Pay in Stripe Checkout. These payments are handled the same way as other card payments.
      h1.mb-5 Google Pay
      p The Google Pay button is displayed in a given Checkout Session if all of the following apply:
      ul.mb-3
        li Google Pay is enabled for Checkout in your #[a(href="https://dashboard.stripe.com/settings/checkout" target="_blank" rel="noreferrer noopener") Stripe Dashboard].
        li The customer is using Google Chrome or Safari.
        li The customer has a valid card registered with Google Pay.
      p This ensures that Checkout only displays the Google Pay button to customers who are able to use it.
      p Here's an example screenshot from Google Chrome runing on Arch Linux, see the Google Pay button.
      img(width="100%" src="~/assets/images/google-pay-sample.png")
      h1.mb-5 Apple Pay
      p The Apple Pay button is displayed in a given Checkout Session if all of the following apply:
      ul
        li Apple Pay is enabled for Checkout in your #[a(href="https://dashboard.stripe.com/settings/checkout" target="_blank" rel="noreferrer noopener") Stripe Dashboard].
        li The customer’s device is running macOS 10.14.1+ or iOS 12.1+.
        li The customer is using the Safari browser.
        li The customer has a valid card registered with Apple Pay.
      p This ensures that Checkout only displays the Apple Pay button to customers who are able to use it.
</template>

<script>
import headMeta from '~/utils/head-meta';
import CodeSnip from '~/components/commons/code-snippet';
import NewWin from '~/components/commons/new-window';
import PageAlert from '~/components/commons/page-alert';
import sessionIdCheckoutSnippet from '~/assets/snippets/stripe-checkout/session-id-checkout.md';
export default {
  layout: 'docs',
  components: {
    CodeSnip,
    NewWin,
    PageAlert,
  },
  data () {
    this.sessionIdCheckoutSnippet = sessionIdCheckoutSnippet;
    return {};
  },
  head () {
    return headMeta({
      title: 'Sessions - Vue Stripe Checkout',
      description: 'Stripe checkout using session id in Vue',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
