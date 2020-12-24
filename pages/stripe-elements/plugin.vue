<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        h1.mb-1 Stripe Element Plugin
        pre Documenation work in progress
</template>

<script>
import headMeta from '~/utils/head-meta';
export default {
  layout: 'docs',
  head () {
    return headMeta({
      title: 'Elements Plugin - Vue Stripe Elements',
      description: 'How to use Stripe Elements fields separately in Vue',
      socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
    });
  },
};
</script>
