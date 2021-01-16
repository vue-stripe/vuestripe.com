<template lang="pug">
  v-row(justify="center")
    v-col(cols="12")
      h1.mb-5 Getting Started
      page-alert(content="Vue Stripe is an easy to implement, and well maintained Vue.js plugin for Stripe Checkout, and Elements.")
      div(style="width: 130px;")
        carbon-ads(v-if="$isMobile")
    v-col(cols="12")
      h1.mb-5 Installation
      v-card
        v-card-text
          p Vue Stripe is available on NPM, or Yarn.
          h3 NPM
          code-snip(lang="language-bash") npm install @vue-stripe/vue-stripe
          h3 Yarn
          code-snip(lang="language-bash") yarn add @vue-stripe/vue-stripe
    v-col(cols="12")
      h1.mb-5 Usage
      v-card
        v-card-text
          h3 Import
          p You just need to import your desired elements component wherever it is needed, and Stripe SDK will only be loaded by the time the component has been mounted.
          code-snip(lang="language-html") {{usageSnippet}}
</template>

<script>
import headMeta from '~/utils/head-meta';
import CodeSnip from '~/components/commons/code-snippet';
import PageAlert from '~/components/commons/page-alert';
import usageSnippet from '~/assets/snippets/stripe-elements/getting-started-usage.md';
export default {
  layout: 'docs',
  components: {
    CodeSnip,
    PageAlert,
  },
  data () {
    this.usageSnippet = usageSnippet;
    return {};
  },
  head () {
    return headMeta({
      title: 'Getting Started - Vue Stripe Elements',
      description: 'How to use Stripe Elements in Vue',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
