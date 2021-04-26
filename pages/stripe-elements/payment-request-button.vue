<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-1 Payment Request Button
      page-alert(
        content="Collect payment and address information from customers who use Apple Pay, Google Pay, Microsoft Pay, and the Payment Request API."
        link="https://stripe.com/docs/stripe-js/elements/payment-request-button"
      )
      carbon-ads(v-if="$isMobile")
    v-col(cols="12")
      h1.mb-5 Live Demo
      v-col(cols="12" md="10").pa-0
        v-card
          v-card-text
            label Payment Request Button
            stripe-element-payment-request-button(
              ref="paymentRequestButtonRef"
              currency="usd"
              country="US"
              totalLabel="Label foo"
              :totalAmount="1000"
              :pk="pk"
            )
</template>

<script>
import headMeta from '~/utils/head-meta';
import PageAlert from '~/components/commons/page-alert';
import CodeSnip from '~/components/commons/code-snippet';
import IconLink from '~/components/commons/icon-link';
import cardProps from '~/assets/fixtures/element-card-props.json';
import cardMethods from '~/assets/fixtures/element-card-methods.json';
import cardEvents from '~/assets/fixtures/element-card-events.json';
import cardUsageSnippet from '~/assets/snippets/stripe-elements/card-usage.md';
import cardSampleSnippet from '~/assets/snippets/stripe-elements/card-sample.md';
export default {
  layout: 'docs',
  components: {
    PageAlert,
    CodeSnip,
    IconLink,
  },
  data () {
    this.pk = process.env.STRIPE_PK;
    this.cardUsageSnippet = cardUsageSnippet;
    this.cardSampleSnippet = cardSampleSnippet;
    this.cardProps = cardProps;
    this.cardMethods = cardMethods;
    this.cardEvents = cardEvents;
    return {
      loading: false,
      tokenDialog: false,
      token: {},
    };
  },
  beforeDestroy () {
    this.$refs.cardRef.element.destroy();
  },
  methods: {
    tokenCreated (token) {
      this.token = token;
      this.tokenDialog = true;
    },
  },
  head () {
    return headMeta({
      title: 'Card - Vue Stripe Elements',
      description: 'How to use Stripe Elements Card in Vue',
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
