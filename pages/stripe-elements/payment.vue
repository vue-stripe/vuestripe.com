<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-1 Payment
      page-alert(content="Accept payment methods from around the globe with a single secure, embeddable UI component.")
      carbon-ads(v-if="$isMobile")
    v-col(cols="12")
      h1.mb-5 Live Demo
      v-col(cols="12" md="10").pa-0
        v-card
          v-card-text
            label Credit Card
            stripe-element-payment(
              ref="paymentRef"
              :pk="pk"
              :create-options="createOptions"
            )
          v-card-actions
            v-btn(
              depressed
              color="primary"
              :loading="loading"
              :disabled="loading"
              @click="$refs.paymentRef.submit()"
            ).text-none Pay
    v-col(cols="12")
      h1.mb-5 1. Usage
      p Import and register the #[code StripeElementCard] component.
      code-snip(lang="language-html") {{cardUsageSnippet}}
    v-col(cols="12")
      h1.mb-5 2. Example
      p Below is an example on how to use #[code StripeElementCard] to generate a token.
      code-snip(lang="language-html") {{cardSampleSnippet}}
    v-col(cols="12")
      h1.mb-5 Props
      v-card
        v-card-text
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
    v-col(cols="12")
      h1.mb-5 Methods
      p You can access thes methods via #[code $refs], like so #[code this.$refs.elementRef.destroy()].
      v-card
        v-card-text
          div(style="overflow-x: auto;")
            table(width="100%")
              thead
                tr(align="left")
                  th(width="180") Name
                  th Return Type
                  th Description
              tbody
                template(v-for="method in cardMethods")
                  tr
                    td {{method.name}}
                      icon-link(
                        v-if="method.link"
                        :link="method.link"
                      )
                    td {{method.type}}
                    td(v-html="method.description")
    v-col(cols="12")
      h1.mb-5 Events
      v-card
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
import cardMethods from '~/assets/fixtures/element-card-methods.json';
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
    this.cardMethods = cardMethods;
    this.cardEvents = cardEvents;
    return {
      loading: false,
      tokenDialog: false,
      token: {},
      createOptions: {
        fields: {
          billingDetails: {
            name: 'never',
            email: 'never',
          },
        },
      },
    };
  },
  beforeDestroy () {
    // eslint-disable-next-line no-unused-expressions
    this.$refs.cardRef?.element?.destroy();
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
