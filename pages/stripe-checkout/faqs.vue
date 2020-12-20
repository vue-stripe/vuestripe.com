<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        h1 FAQs
</template>

<script>
import headMeta from '~/utils/head-meta';
export default {
  layout: 'docs',
  head () {
    return headMeta({
      title: 'FAQs - Vue Stripe Checkout',
      description: 'A guide on how to install vue stripe checkout',
      socialBanner: require('../../assets/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
