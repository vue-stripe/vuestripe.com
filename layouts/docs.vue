<template lang="pug">
  v-app#app
    v-app-bar(
      app
      elevate-on-scroll
    ).white
      v-btn(
        icon
        large
        @click="drawer = !drawer"
      )
        v-icon.primary--text mdi-hamburger
      v-spacer
      v-btn(
        icon
        large
        href="https://github.com/vue-stripe"
        target="_bank"
        rel="noreferrer noopener"
      )
        v-icon.primary--text mdi-github
      v-btn(
        icon
        large
        href="https://opencollective.com/vue-stripe-checkout"
        target="_bank"
        rel="noreferrer noopener"
      )
        v-icon.primary--text mdi-heart
    v-navigation-drawer(
      v-model="drawer"
      app
      width="300"
    )
      v-toolbar(flat)
        img(width="45" src="~/assets/images/vue-stripe-logo-variant-1-small.png")
        h2 Vue #[span.primary--text Stripe]
      v-list
        v-list-item(to="/")
          v-list-item-icon.mr-2
            v-icon mdi-home
          v-list-item-content
            v-list-item-title Home
        v-list-item(color="primary" :to="{ name: 'nuxt' }")
          v-list-item-icon.mr-2
            v-icon mdi-nuxt
          v-list-item-content
            v-list-item-title Vue Stripe with Nuxt.js
        v-list-group(:value="true")
          template(v-slot:activator)
            v-list-item-title Vue Stripe Plugin #[v-icon.red--text mdi-new-box]
          template(v-for="menu in stripePluginMenus")
            v-list-item(:to="{ name: menu.route }")
              v-list-item-content
                v-list-item-title.pl-3 {{menu.name}} #[v-icon(v-if="menu.isNew").red--text mdi-new-box]
        v-list-group(:value="true")
          template(v-slot:activator)
            v-list-item-title Vue Stripe Checkout
          template(v-for="menu in stripeCheckoutMenus")
            v-list-item(:to="{ name: menu.route }")
              v-list-item-content
                v-list-item-title.pl-3 {{menu.name}} #[v-icon(v-if="menu.isNew").red--text mdi-new-box]
        v-list-group(:value="true")
          template(v-slot:activator)
            v-list-item-title Vue Stripe Elements
          template(v-for="menu in stripeElementsMenus")
            template(v-if="menu.route")
              v-list-item(:to="{ name: menu.route }")
                v-list-item-content
                  v-list-item-title.pl-3 {{menu.name}} #[v-icon(v-if="menu.isNew").red--text mdi-new-box]
            template(v-else)
              v-list-item(disabled)
                v-list-item-content
                  v-list-item-title.pl-3 {{menu.name}} #[small #[i Coming Soon]]
    v-content
      v-container
        v-row(justify="center")
          v-col(v-if="!$isMobile" cols="12" md="2").pt-9
            div(style="position: fixed; width: 130px;")
              carbon-ads
          v-col(cols="12" md="8")
            nuxt
          v-col(v-if="!$isMobile" cols="12" md="2")
    author-footer
</template>

<script>
import AuthorFooter from '~/components/commons/author-footer';
export default {
  components: {
    AuthorFooter,
  },
  data () {
    return {
      drawer: null,
      stripePluginMenus: [
        {
          name: 'Getting Started',
          route: 'stripe-plugin-getting-started',
        },
      ],
      stripeCheckoutMenus: [
        {
          name: 'Getting Started',
          route: 'stripe-checkout-getting-started',
        },
        {
          name: 'One-time Payment',
          route: 'stripe-checkout-one-time-payment',
        },
        {
          name: 'Subscription (Recurring Payment)',
          route: 'stripe-checkout-recurring-payment',
        },
        {
          name: 'Sessions',
          route: 'stripe-checkout-sessions',
        },
        {
          name: 'Sessions Generator',
          route: 'stripe-checkout-sessions-generator',
        },
        {
          name: 'Google & Apply Pay',
          route: 'stripe-checkout-google-and-apple-pay',
          isNew: true,
        },
        // {
        //   name: 'FAQs',
        //   route: 'stripe-checkout-faqs',
        // },
        // {
        //   name: 'Change Log',
        //   route: 'stripe-checkout-change-log',
        // },
      ],
      stripeElementsMenus: [
        {
          name: 'Getting Started',
          route: 'stripe-elements-getting-started',
        },
        {
          name: 'Elements Plugin',
          route: 'stripe-elements-plugin',
        },
        {
          name: 'Card',
          route: 'stripe-elements-card',
        },
        {
          name: 'Card Number',
        },
        {
          name: 'Card Expiry',
        },
        {
          name: 'Card CVC',
        },
        {
          name: 'FPX Bank',
        },
        {
          name: 'Iban',
        },
        {
          name: 'Ideal Bank',
        },
        {
          name: 'P24 Bank',
        },
        {
          name: 'EPS Bank',
        },
        {
          name: 'Payment Request Button',
        },
        {
          name: 'AU Bank Account',
        },
        // {
        //   name: 'FAQs',
        //   route: 'stripe-elements-faqs',
        // },
        // {
        //   name: 'Change Log',
        //   route: 'stripe-elements-change-log',
        // },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Sniglet', cursive;
  /* font-family: 'JetBrains Mono', monospace; */
  color: #34495E;
}

h1,h2,h3,h4,h5,h6 {
  color: #34495E;
}
</style>
