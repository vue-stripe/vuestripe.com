import Vue from 'vue';
import {
  StripePlugin,
  StripeCheckout,
  StripeElementCard,
  StripeElementPaymentRequestButton,
} from '@vue-stripe/vue-stripe';

export default () => {
  Vue.component('StripeCheckout', StripeCheckout);
  Vue.component('StripeElementCard', StripeElementCard);
  Vue.component('StripeElementPaymentRequestButton', StripeElementPaymentRequestButton);
  Vue.use(StripePlugin, { pk: process.env.STRIPE_PK });
};
