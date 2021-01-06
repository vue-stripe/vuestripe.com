import Vue from 'vue';
import {
  StripeCheckout,
  StripeElementCard,
  StripeElementsPlugin,
} from '@vue-stripe/vue-stripe';

export default () => {
  Vue.component('StripeCheckout', StripeCheckout);
  Vue.component('StripeElementCard', StripeElementCard);
  Vue.use(StripeElementsPlugin, { pk: process.env.STRIPE_PK });
};
