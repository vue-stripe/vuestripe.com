<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-1 Payment
      page-alert(content="Easy to implement custom payment elements by Stripe.")
      carbon-ads(v-if="$isMobile")
    v-col(cols="12")
      h1.mb-5 Live Demo
      h1.mb-5 1. Create a PaymentIntent #[v-chip.success backend]
      v-col(cols="12" md="10").pa-0
        p ClientSecret is required for the elements to be rendered. That's why you need to generate a payment intent first.
        p See the PaymentIntent documentation #[a(href="https://stripe.com/docs/api/payment_intents/create?lang=node" target="_blank") here].
        p Let's use the following data to render create a PaymentIntent.
        code-snip(lang="language-javascript") {{paymentIntentData}}
      h1.mb-5 2. Render Payment Elements #[v-chip.primary frontend]
      v-col(cols="12" md="10").pa-0
        p The ClientScret from the request above will be used as an option to render the UI.
        v-card
          v-card-text(v-if="loading").text-xs-center
            v-progress-circular(
              color="primary"
              indeterminate
            )
          v-card-text(v-if="!loading && success")
            stripe-element-payment(
              ref="paymentRef"
              :pk="pk"
              :elements-options="elementOptions"
              :confirm-params="confirmParams"
            )
          v-card-actions(v-if="!loading")
            v-btn(
              depressed
              color="primary"
              :loading="loading"
              :disabled="loading"
              @click="$refs.paymentRef.submit()"
            ).text-none Pay $20.00
      h1.mb-5.mt-4 Get Started with Payment Elements
      v-col(cols="12" md="10").pa-0
        p See implementation guide #[a(href="https://docs.vuestripe.com/vue-stripe/stripe-elements/payment" target="_blank") here].
    v-dialog(v-model="redirectDialog" width="400" persistent)
      v-card
        v-card-text(v-if="redirectState === 'success'").pa-10.text-center
          v-icon(style="font-size: 40px;").success--text mdi-check
          h2 Success!
          p Checkout process went through!
        v-card-actions
          v-spacer
          v-btn(
            depressed
            color="primary"
            @click="$router.push({ name: 'stripe-elements-payment' }); redirectDialog = false"
          ).text-none Done
</template>

<script>
import headMeta from '~/utils/head-meta';
import PageAlert from '~/components/commons/page-alert';
import CodeSnip from '~/components/commons/code-snippet';
import IconLink from '~/components/commons/icon-link';
import paymentIntentData from '~/assets/fixtures/payment-intent-data.json';
export default {
  layout: 'docs',
  components: {
    PageAlert,
    CodeSnip,
    IconLink,
  },
  data () {
    this.pk = process.env.STRIPE_PK;
    this.paymentIntentData = paymentIntentData;
    return {
      loading: false,
      success: true,
      redirectDialog: false,
      redirectState: '',
      clientSecret: null,
      elementOptions: {},
      confirmParams: {
        return_url: process.client && `${window.location.origin}${window.location.pathname}?state=success`,
      },
    };
  },
  computed: {
    queryState () {
      return process.client && (new URLSearchParams(window.location.search).get('state') || '');
    },
  },
  beforeDestroy () {
    // eslint-disable-next-line no-unused-expressions
    this.$refs.paymentRef?.element?.destroy();
  },
  mounted () {
    if (this.queryState === 'success') {
      this.redirectState = 'success';
      this.redirectDialog = true;
    }
    this.createPaymentIntent();
  },
  methods: {
    async createPaymentIntent () {
      try {
        this.loading = true;
        const { data } = await this.$axios({
          method: 'post',
          url: `${process.env.API_URL}/paymentIntents`,
        });
        console.warn('Payment Intent', data);
        this.elementOptions.clientSecret = data.client_secret;
        this.success = true;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
  },
  head () {
    return headMeta({
      title: 'Card - Vue Stripe Elements',
      description: 'How to use Stripe Elements Payement in Vue',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid lightgrey;
  padding: 10px;
}
</style>
