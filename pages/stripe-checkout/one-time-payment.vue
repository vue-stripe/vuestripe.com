<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-5 One-time Payment
      page-alert(content="Vue Stripe Checkout also supports one-time card payments.")
      carbon-ads(v-if="$isMobile")
    v-col(cols="12")
      h1.mb-5 Live Demo
      p This one T-shirt product has two prices, $20 USD and €15 Euro.
      v-col(cols="12" md="6").pa-0
        v-card
          v-card-text.text-center
            img(width="200" src="~/assets/images/shirt.jpeg")
            stripe-checkout(
              ref="checkoutRef"
              mode="payment"
              :pk="pk"
              :line-items="lineItems"
              :success-url="successURL"
              :cancel-url="cancelURL"
              @loading="v => loading = v"
            )
          v-card-actions
            v-spacer
            v-btn(
              depressed
              color="primary"
              :loading="loading"
              :disabled="loading"
              @click="payUSD"
            ).text-none Pay $20 USD
            v-btn(
              depressed
              color="accent"
              :loading="loading"
              :disabled="loading"
              @click="payEuro"
            ).text-none.black--text Pay €15 Euro
            v-spacer
    v-col(cols="12")
      h1.mb-5 1. Enable Checkout
      p You must first enable the client-only integration settings in your Stripe dashboard, you also have the option to customize the look and feel of your checkout page. #[new-win(link="https://stripe.com/docs/payments/checkout/client#enable-checkout") More details].
    v-col(cols="12")
      h1.mb-5 2. Create products and prices
      p Product, and Price are required to make this work. Whether it's a physical item, or a service, it needs to be represented by a product. Each product can have one or more prices.
      p For example, you can create a T-shirt product, with different prices for different currencies. $20 USD and €15 Euro. #[new-win(link="https://stripe.com/docs/payments/checkout/client#create-products-and-prices") More details].
    v-col(cols="12")
      h1.mb-5 3. Redirect to checkout
      p Follow the Vue Stripe Checkout example below:
      code-snip(lang="language-html") {{oneTimePaymentSnippet}}
    v-dialog(v-model="redirectDialog" width="400")
      v-card
        v-card-text(v-if="redirectState === 'success'").pa-10.text-center
          v-icon(style="font-size: 40px;").success--text mdi-check
          h2 Success!
          p Checkout process went through!
        v-card-text(v-if="redirectState === 'cancel'").pa-10.text-center
          v-icon(style="font-size: 40px;").error--text mdi-close
          h2 Error!
          p Checkout process didn't go through!
</template>

<script>
import headMeta from '~/utils/head-meta';
import CodeSnip from '~/components/commons/code-snippet';
import NewWin from '~/components/commons/new-window';
import PageAlert from '~/components/commons/page-alert';
import oneTimePaymentSnippet from '~/assets/snippets/stripe-checkout/one-time-payment.md';
export default {
  layout: 'docs',
  components: {
    CodeSnip,
    NewWin,
    PageAlert,
  },
  data () {
    this.oneTimePaymentSnippet = oneTimePaymentSnippet;
    this.pk = process.env.STRIPE_PK;
    return {
      loading: false,
      redirectDialog: false,
      redirectState: '',
      lineItems: [],
      successURL: process.client && `${window.location.origin}${window.location.pathname}?state=success`,
      cancelURL: process.client && `${window.location.origin}${window.location.pathname}?state=cancel`,
    };
  },
  computed: {
    queryState () {
      return process.client && (new URLSearchParams(window.location.search).get('state') || '');
    },
  },
  mounted () {
    if (this.queryState === 'success') {
      this.redirectState = 'success';
      this.redirectDialog = true;
    }
    if (this.queryState === 'cancel') {
      this.redirectState = 'cancel';
      this.redirectDialog = true;
    }
  },
  methods: {
    payUSD () {
      this.lineItems[0] = {
        price: 'price_1I1xv3EfCmJMLhhrJ5vdGxy6',
        quantity: 1,
      };
      this.$refs.checkoutRef.redirectToCheckout();
    },
    payEuro () {
      this.lineItems[0] = {
        price: 'price_1I1xv3EfCmJMLhhrkjIQ2KHF',
        quantity: 1,
      };
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  head () {
    return headMeta({
      title: 'One-time Payment - Vue Stripe Checkout',
      description: 'How to make a one-time payment using Stripe Checkout in Vue',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
