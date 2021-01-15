<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        h1.mb-5 Getting Started
        page-alert(content="Vue Stripe is an easy to implement, and well maintained Vue.js plugin for Stripe Checkout, and Elements.")
        carbon-ads
      v-col(cols="12" md="10")
        h1.mb-5 Installation
        v-card
          v-card-text
            p Vue Stripe is available on NPM, or Yarn.
            h3 NPM
            code-snip(lang="language-bash") npm install @vue-stripe/vue-stripe
            h3 Yarn
            code-snip(lang="language-bash") yarn add @vue-stripe/vue-stripe
      v-col(cols="12" md="10")
        h1.mb-5 Usage
        v-card
          v-card-text
            h3 Import
            p You just need to import the #[code StripeCheckout] component wherever it is needed, and Stripe SDK will only be loaded by the time the component has been mounted.
            code-snip(lang="language-html") {{usageSnippet}}
      v-col(cols="12" md="10")
        h1.mb-5 Props
        v-card
          v-card-text
            div(style="overflow-x: auto;")
              table(width="100%")
                thead
                  tr(align="left")
                    th Name
                    th Type
                    th Default
                    th Required
                    th Description
                tbody
                  template(v-for="prop in checkoutProps")
                    tr
                      td
                        span.mr-1 {{prop.name}}
                        icon-link(
                          v-if="prop.link"
                          :link="prop.link"
                        )
                      td {{prop.type}}
                      td {{prop.default}}
                      td {{prop.required}}
                      td(v-html="prop.description")
      v-col(cols="12" md="10")
        h1.mb-5 Events
        v-card
          v-card-text
            div(style="overflow-x: auto;")
              table(width="100%")
                thead
                  tr(align="left")
                    th Name
                    th Type
                    th Description
                tbody
                  template(v-for="event in checkoutEvents")
                    tr
                      td {{event.name}}
                      td {{event.type}}
                      td(v-html="event.description")
</template>

<script>
import headMeta from '~/utils/head-meta';
import CodeSnip from '~/components/commons/code-snippet';
import PageAlert from '~/components/commons/page-alert';
import IconLink from '~/components/commons/icon-link';
import usageSnippet from '~/assets/snippets/stripe-checkout/getting-started-usage.md';
import checkoutProps from '~/assets/fixtures/checkout-props.json';
import checkoutEvents from '~/assets/fixtures/checkout-events.json';
export default {
  layout: 'docs',
  components: {
    CodeSnip,
    PageAlert,
    IconLink,
  },
  data () {
    this.usageSnippet = usageSnippet;
    this.checkoutProps = checkoutProps;
    this.checkoutEvents = checkoutEvents;
    return {};
  },
  head () {
    return headMeta({
      title: 'Getting Started - Vue Stripe Checkout',
      description: 'A guide on how to install vue stripe checkout',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid lightgrey;
  padding: 10px;
}
</style>
