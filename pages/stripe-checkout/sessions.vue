<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-5 Sessions
      page-alert(content="Vue Stripe Checkout also supports checkout using Session Id.")
      p Take note that #[code Session] ids are generate from the backend. To know more about sessions visit the #[new-win(link="https://stripe.com/docs/api/checkout/sessions") documentation].
      div(style="width: 130px;")
        carbon-ads(v-if="$isMobile")
    v-col(cols="12")
      h1.mb-5 1. Create a session
      p You need to create the session in your backend. This session will return an #[code id], use that id to checkout the payment.
    v-col(cols="12")
      h1.mb-5 2. Redirect to checkout
      p Follow the Vue Stripe Checkout example below:
      p You'll notice that when using sessions, you'll only need the #[code session-id]. This is because the session is the representation of all of the information (including success, and cacncel URLs) about the payment to be done.
      code-snip(lang="language-html") {{sessionIdCheckoutSnippet}}
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
