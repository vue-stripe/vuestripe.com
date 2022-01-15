import Vue from 'vue';
import {
  StripePlugin,
  StripeCheckout,
  StripeElementCard,
  StripeElementPayment,
} from '@vue-stripe/vue-stripe';

export default () => {
  Vue.component('StripeCheckout', StripeCheckout);
  Vue.component('StripeElementCard', StripeElementCard);
  Vue.component('StripeElementPayment', StripeElementPayment);
  Vue.use(StripePlugin, { pk: process.env.STRIPE_PK });
};
