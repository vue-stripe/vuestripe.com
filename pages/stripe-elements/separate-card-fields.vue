<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-1 Separate Card Fields using #[span.primary--text Vue Stripe Plugin]
      page-alert(content="This is just one use-case of Vue Stripe Plugin.")
      carbon-ads(v-if="$isMobile")
    v-col(cols="12")
      h2.mb-5 Live Demo
      v-card
        v-card-text
          label Card Number
          div#card-number.mb-2
          label Card Expiry
          div#card-expiry.mb-2
          label Card CVC
          div#card-cvc.mb-2
          div#card-error
          button(@click="createToken")#custom-button Generate Token
          v-dialog(v-model="tokenDialog" width="600")
            v-card
              v-toolbar(
                flat
                color="primary"
                dark
              )
                v-toolbar-title Tokenized customer card from Stripe
                v-spacer
                v-btn(icon @click="tokenDialog = false")
                  v-icon mdi-close
              v-card-text.px-2.py-1
                code-snip(lang="language-javascript") {{token}}
    v-col(cols="12")
      h2.mb-5 Step 1 - Import Stripe JavaScript SDK
      install-stripe-js-sdk
    v-col(cols="12")
      h2.mb-5 Step 2 - Install Vue Stripe Plugin
      p Import and register the #[code StripePlugin] plugin.
      code-snip(lang="language-javascript") {{stripePluginUsage}}
      p This will give you access to #[code this.$stripe]. Using this you can create now create an instance of Stripe Elements.
      p With this, you can now access the Elements methods like, #[code .create], #[code .getElement], and more. See #[a(src="https://stripe.com/docs/js/elements_object/create" rel="noreferrer noopener") here].
    v-col(cols="12")
      h2.mb-5 Step 3 - Use Case
      p Separate components for each card fields.
      p Official component for these are still in development. So this is just a sample to help you implement them on your own.
      code-snip(lang="language-html") {{elementsPluginUsageSeparateElements}}
</template>

<script>
import headMeta from '~/utils/head-meta';
import PageAlert from '~/components/commons/page-alert';
import CodeSnip from '~/components/commons/code-snippet';
import InstallStripeJsSdk from '~/components/commons/install-stripe-js-sdk';
import elementsPluginUsageAddSdk from '~/assets/snippets/stripe-elements/plugin-usage-add-sdk.md';
import stripePluginUsage from '~/assets/snippets/stripe-plugin/plugin-usage.md';
import elementsPluginUsageSeparateElements from '~/assets/snippets/stripe-plugin/plugin-usage-separate-elements.md';
export default {
  layout: 'docs',
  components: {
    PageAlert,
    CodeSnip,
    InstallStripeJsSdk,
  },
  data () {
    this.elementsPluginUsageAddSdk = elementsPluginUsageAddSdk;
    this.stripePluginUsage = stripePluginUsage;
    this.elementsPluginUsageSeparateElements = elementsPluginUsageSeparateElements;
    return {
      tokenDialog: false,
      //
      token: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
    };
  },
  computed: {
    stripeElements () {
      return this.$stripe.elements();
    },
  },
  mounted () {
    const style = {
      base: {
        color: 'black',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.cardNumber = this.stripeElements.create('cardNumber', { style });
    this.cardNumber.mount('#card-number');
    this.cardExpiry = this.stripeElements.create('cardExpiry', { style });
    this.cardExpiry.mount('#card-expiry');
    this.cardCvc = this.stripeElements.create('cardCvc', { style });
    this.cardCvc.mount('#card-cvc');
  },
  beforeDestroy () {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  },
  methods: {
    async createToken () {
      const { token, error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        console.error(error);
        document.getElementById('card-error').innerHTML = error.message;
        return;
      }
      this.tokenDialog = true;
      this.token = token;
    },
  },
  head () {
    return headMeta({
      title: 'Stripe Card Fields - Vue Stripe Plugin',
      description: 'How to use Stripe Elements fields separately in Vue',
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
