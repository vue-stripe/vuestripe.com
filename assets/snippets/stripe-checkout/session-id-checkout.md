<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      :pk="publishableKey"
      :session-id="sessionId"
    />
    <button @click="submit">Checkout!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    return {
      loading: false,
      sessionId: 'session-id', // session id from backend
    };
  },
  // You will be redirected to Stripe's secure checkout page
  submit () {
    this.$refs.checkoutRef.redirectToCheckout();
  },
};
</script>