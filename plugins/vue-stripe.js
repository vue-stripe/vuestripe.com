import Vue from 'vue';
import {
  StripePlugin,
  StripeCheckout,
  StripeElementCard,
  StripeElementsPlugin,
} from '@vue-stripe/vue-stripe';

export default () => {
  Vue.component('StripeCheckout', StripeCheckout);
  Vue.component('StripeElementCard', StripeElementCard);
  Vue.use(StripePlugin, { pk: process.env.STRIPE_PK });
  Vue.use(StripeElementsPlugin, { pk: process.env.STRIPE_PK });
};
