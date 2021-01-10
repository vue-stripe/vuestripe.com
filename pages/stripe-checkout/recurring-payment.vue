<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        h1.mb-5 Recurring Payment
        page-alert(content="Vue Stripe Checkout also supports subscription or recurring payments.")
      v-col(cols="12" md="10")
        h1.mb-5 Live Demo
        p Subscribe to Centipede Gaming Channel
        v-col(cols="12" md="6")
          v-card
            v-card-text.text-center
              img(width="200" src="~/assets/images/centipede.jpg")
              stripe-checkout(
                ref="checkoutRef"
                mode="subscription"
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
                @click="subscribe('tier1')"
              ).text-none Subscribe $10
              v-btn(
                depressed
                color="accent"
                :loading="loading"
                :disabled="loading"
                @click="subscribe('tier2')"
              ).text-none.black--text Subscribe $20
              v-btn(
                depressed
                color="secondary"
                :loading="loading"
                :disabled="loading"
                @click="subscribe('tier3')"
              ).text-none Subscribe $50
              v-spacer
      v-col(cols="12" md="10")
        h1.mb-5 1. Enable Checkout
        p You must first enable the client-only integration settings in your Stripe dashboard, you also have the option to customize the look and feel of your checkout page. #[new-win(link="https://stripe.com/docs/payments/checkout/client-subscription#enable-checkout") More details].
      v-col(cols="12" md="10")
        h1.mb-5 2. Create products and recurring prices
        p Product, and Price are required to make this work. Whether it's a physical item, or a service, it needs to be represented by a product. Each product can have one or more prices.
        p For example, you can create a software product with different subscription tiers. $10/month, $20/month, and $50/month #[new-win(link="https://stripe.com/docs/payments/checkout/client-subscription#create-products-and-prices") More details].
      v-col(cols="12" md="10")
        h1.mb-5 3. Redirect to checkout
        p Follow the Vue Stripe Checkout example below:
        code-snip(lang="language-html") {{recurringPaymentSnippet}}
</template>

<script>
import headMeta from '~/utils/head-meta';
import CodeSnip from '~/components/commons/code-snippet';
import NewWin from '~/components/commons/new-window';
import PageAlert from '~/components/commons/page-alert';
import recurringPaymentSnippet from '~/assets/snippets/stripe-checkout/recurring-payment.md';
export default {
  layout: 'docs',
  components: {
    CodeSnip,
    NewWin,
    PageAlert,
  },
  data () {
    this.recurringPaymentSnippet = recurringPaymentSnippet;
    this.pk = process.env.STRIPE_PK;
    return {
      loading: false,
      lineItems: [],
      successURL: process.client && window.location.href,
      cancelURL: process.client && window.location.href,
    };
  },
  methods: {
    subscribe (tier) {
      switch (tier) {
        case 'tier1': {
          this.lineItems[0] = {
            price: 'price_1I1yPrEfCmJMLhhrvcNB94ld',
            quantity: 1,
          };
          break;
        }
        case 'tier2': {
          this.lineItems[0] = {
            price: 'price_1I1yPrEfCmJMLhhrk8PXfu6n',
            quantity: 1,
          };
          break;
        }
        case 'tier3': {
          this.lineItems[0] = {
            price: 'price_1I1yPrEfCmJMLhhrLIblyX42',
            quantity: 1,
          };
          break;
        }
      };
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  head () {
    return headMeta({
      title: 'Recurring Payment - Vue Stripe Checkout',
      description: 'How to create a subscription payment using Stripe Checkout in Vue',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
