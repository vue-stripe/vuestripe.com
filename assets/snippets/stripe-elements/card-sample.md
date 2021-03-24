<template>
  <div>
    <stripe-element-card
      ref="elementRef"
      :pk="pulishableKey"
      @token="tokenCreated"
    />
    <button @click="submit">Generate token</button>
  </div>
</template>

<script>
import { StripeElementCard } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeElementCard,
  },
  data () {
    this.pulishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    return {
      token: null,
    };
  },
  method: {
    submit () {
      // this will trigger the process
      this.$refs.elementRef.submit();
    },
    tokenCreated (token) {
      console.log(token);
      // handle the token
      // send it to your server
    },
  }
};
</script>
