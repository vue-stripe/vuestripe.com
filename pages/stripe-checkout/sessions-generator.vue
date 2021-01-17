<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-5 Sessions Generator
      page-alert(content="Interactive session generator to demo checkout using sessions.")
      p Take note that #[code Session] ids are generate from the backend. To know more about sessions visit the #[new-win(link="https://stripe.com/docs/api/checkout/sessions") documentation].
      div(style="width: 130px;")
        carbon-ads(v-if="$isMobile")
    v-col(cols="12")
      h1.mb-5 1. Prepare checkout data #[v-chip.primary frontend]
      p Prerequisite: #[router-link(:to="{ name: 'stripe-checkout-one-time-payment' }") Enable Checkout, and Create Products]
      code-snip(lang="language-javascript") {{sessionPayload}}
    v-col(cols="12")
      h1.mb-5 2. Create a session #[v-chip.success backend]
      p Create a session using the data from Step 1. Note that the #[code "mode"="payment"] means that you are creating a one-time payment session. #[a(href="https://github.com/vue-stripe/vue-stripe-functions" target="_blank" rel="noreferrer noopener") Node.js sample here].
      v-btn(
        color="primary"
        large
        depressed
        :disabled="sessionLoading"
        :loading="sessionLoading"
        @click="createSession"
      ).text-none Create Session
      template(v-if="session")
        p.mt-5 Congrats! Here's your session id. Copy this to the checkout field below.
        code-snip(lang="language-javascript") {{session.id}}
    v-col(cols="12")
      h1.mb-5 3. Checkout using session id #[v-chip.primary frontend]
      stripe-checkout(
        ref="checkoutRef"
        :pk="pk"
        :session-id="sessionId"
      )
      v-text-field(
        v-model="sessionId"
        outlined
        dense
        label="Session ID"
      )
      v-btn(
        color="primary"
        large
        depressed
        :disabled="!sessionId"
        @click="$refs.checkoutRef.redirectToCheckout()"
      ).text-none Checkout Using Session
    v-col(cols="12")
      b Sample Code
      code-snip(lang="language-html") {{sessionIdCheckoutSnippet}}
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
import PageAlert from '~/components/commons/page-alert';
import sessionIdCheckoutSnippet from '~/assets/snippets/stripe-checkout/session-id-checkout.md';
export default {
  layout: 'docs',
  components: {
    CodeSnip,
    PageAlert,
  },
  data () {
    this.pk = process.env.STRIPE_PK;
    this.sessionIdCheckoutSnippet = sessionIdCheckoutSnippet;
    return {
      sessionLoading: false,
      redirectDialog: false,
      sessionPayload: {
        success_url: process.client && `${window.location.origin}${window.location.pathname}?state=success`,
        cancel_url: process.client && `${window.location.origin}${window.location.pathname}?state=cancel`,
        payment_method_types: ['card'],
        line_items: [
          {
            price: 'price_1I1xv3EfCmJMLhhrJ5vdGxy6',
            quantity: 1,
          },
        ],
        mode: 'payment',
      },
      session: null,
      sessionId: '',
    };
  },
  computed: {
    successURL () {
      return process.client && `${window.location.origin}${window.location.pathname}?state=success`;
    },
    cancelURL () {
      return process.client && `${window.location.origin}${window.location.pathname}?state=cancel`;
    },
  },
  mounted () {
    const { state } = this.$route.query;
    if (state === 'success') {
      this.redirectState = 'success';
      this.redirectDialog = true;
    }
    if (state === 'cancel') {
      this.redirectState = 'cancel';
      this.redirectDialog = true;
    }
  },
  methods: {
    async createSession () {
      try {
        this.sessionLoading = true;
        const { data } = await this.$axios({
          method: 'post',
          url: `${process.env.API_URL}/sessions`,
          data: this.sessionPayload,
        });
        this.session = data;
      } catch (e) {
        console.error(e);
      } finally {
        this.sessionLoading = false;
      }
    },
  },
  head () {
    return headMeta({
      title: 'Generate Sessions - Vue Stripe Checkout',
      description: 'Stripe checkout using session id in Vue',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>

<style scoped>
.code-input {
  outline: 1px solid grey;
  margin: 1px;
}
</style>
