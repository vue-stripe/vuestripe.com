<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        h1.mb-1 Card
        page-alert(content="The Card Element lets you collect card information all within one Element. It includes a dynamically-updating card brand icon as well as inputs for number, expiry, CVC, and postal code. Get started with accepting a payment.")
        carbon-ads
      v-col(cols="12" md="10")
        h1.mb-5 Live Demo
        p This one T-shirt product has two prices, $20 USD and €15 Euro.
        v-col(cols="12" md="6")
          v-card
            v-card-text
              label Credit Card
              stripe-element-card(
                ref="cardRef"
                :pk="pk"
                hide-postal-code
                @token="tokenCreated"
                @loading="v => loading = v"
              )
              v-dialog(v-model="tokenDialog" width="600")
                v-card
                  v-toolbar(
                    flat
                    color="primary"
                    dark
                  )
                    v-toolbar-title Tokenized customer card from Stripe
                    v-spacer
                    v-btn(icon @click="tokenDialog = false")
                      v-icon mdi-close
                  v-card-text.px-2.py-1
                    code-snip(lang="language-javascript") {{token}}
            v-card-actions
              v-btn(
                depressed
                color="primary"
                :loading="loading"
                :disabled="loading"
                @click="$refs.cardRef.submit()"
              ).text-none Generate Token
      v-col(cols="12" md="10")
        h1.mb-5 1. Usage
        p Import and register the #[code StripeElementCard] component.
        code-snip(lang="language-html") {{cardUsageSnippet}}
      v-col(cols="12" md="10")
        h1.mb-5 2. Example
        p Below is an example on how to use #[code StripeElementCard] to generate a token.
        code-snip(lang="language-html") {{cardSampleSnippet}}
      v-col(cols="12" md="10")
        h1.mb-5 3. Props & Events
        v-card
          v-card-text
            h2.mb-2 Props
            div(style="overflow-x: auto;")
              table(width="100%")
                thead
                  tr(align="left")
                    th(width="180") Name
                    th Type
                    th Default
                    th Required
                    th Description
                tbody
                  template(v-for="prop in cardProps")
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
          v-card-text
            div(style="overflow-x: auto;")
              table(width="100%")
                thead
                  tr(align="left")
                    th(width="180") Name
                    th Return Type
                    th Description
                tbody
                  template(v-for="event in cardEvents")
                    tr
                      td {{event.name}}
                      td {{event.type}}
                      td(v-html="event.description")
</template>

<script>
import headMeta from '~/utils/head-meta';
import PageAlert from '~/components/commons/page-alert';
import CodeSnip from '~/components/commons/code-snippet';
import IconLink from '~/components/commons/icon-link';
import cardProps from '~/assets/fixtures/element-card-props.json';
import cardEvents from '~/assets/fixtures/element-card-events.json';
import cardUsageSnippet from '~/assets/snippets/stripe-elements/card-usage.md';
import cardSampleSnippet from '~/assets/snippets/stripe-elements/card-sample.md';
export default {
  layout: 'docs',
  components: {
    PageAlert,
    CodeSnip,
    IconLink,
  },
  data () {
    this.pk = process.env.STRIPE_PK;
    this.cardUsageSnippet = cardUsageSnippet;
    this.cardSampleSnippet = cardSampleSnippet;
    this.cardProps = cardProps;
    this.cardEvents = cardEvents;
    return {
      loading: false,
      tokenDialog: false,
      token: {},
    };
  },
  beforeDestroy () {
    this.$refs.cardRef.element.destroy();
  },
  methods: {
    tokenCreated (token) {
      this.token = token;
      this.tokenDialog = true;
    },
  },
  head () {
    return headMeta({
      title: 'Card - Vue Stripe Elements',
      description: 'How to use Stripe Elements Card in Vue',
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
