import Vue from 'vue';
import { StripeElementsPlugin } from '@vue-stripe/vue-stripe';

const options = {
  pk: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeAccount: process.env.STRIPE_ACCOUNT,
  apiVersion: process.env.API_VERSION,
  locale: process.env.LOCALE,
  // See https://stripe.com/docs/js/elements_object/create#stripe_elements-options
  elementsOptions: {
    fonts: [],
    locale: 'auto',
  },
};

Vue.use(StripeElementsPlugin, options);