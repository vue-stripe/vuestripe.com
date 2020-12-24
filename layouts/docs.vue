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
    )
      v-toolbar(flat)
        img(width="45" src="~/assets/images/vue-stripe-logo-variant-1-small.png")
        h2 Vue #[span.primary--text Stripe]
      v-list
        v-list-item(to="/")
          v-list-item-content
            v-list-item-title Home
        v-list-group(:value="true")
          template(v-slot:activator)
            v-list-item-title Vue Stripe Checkout
          template(v-for="menu in stripeCheckoutMenus")
            v-list-item(:to="{ name: menu.route }")
              v-list-item-content
                v-list-item-title.pl-3 {{menu.name}}
        v-list-group(:value="true")
          template(v-slot:activator)
            v-list-item-title Vue Stripe Elements
          template(v-for="menu in stripeElementsMenus")
            v-list-item(:to="{ name: menu.route }")
              v-list-item-content
                v-list-item-title.pl-3 {{menu.name}}
    v-content.mb-10
      nuxt
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
      stripeCheckoutMenus: [
        {
          name: 'Getting Started',
          route: 'stripe-checkout-getting-started',
        },
        {
          name: 'Nuxt.js',
          route: 'stripe-checkout-nuxt',
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
          name: 'Card',
          route: 'stripe-elements-card',
        },
        {
          name: 'Elements Plugin',
          route: 'stripe-elements-plugin',
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

<style scoped>
#app {
  font-family: 'Sniglet', cursive;
  /* font-family: 'JetBrains Mono', monospace; */
  color: #34495E;
}

h1,h2,h3,h4,h5,h6 {
  color: #34495E;
}
</style>
