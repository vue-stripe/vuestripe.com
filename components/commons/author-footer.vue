<template lang="pug">
  v-footer(
    app
    inset
    absolute
    color="accent"
  ).py-0
    v-container
      v-row(justify="center")
        v-col(cols="12" md="10").pa-0.text-center
          p.mb-2.mr-2 Made with #[v-icon.red--text mdi-heart] by Joff Tiquez
          v-btn(
            small
            depressed
            outlined
            href="https://twitter.com/jrtiquez"
            target="_blank"
            rel="noopener noreferrer"
          ).ma-1.text-none Follow #[v-icon(style="font-size: 18px;") mdi-twitter]
          v-btn(
            small
            depressed
            outlined
            href="https://github.com/vue-stripe/vuestripe.com"
            target="_blank"
            rel="noopener noreferrer"
          ).ma-1.text-none Contribute #[v-icon(style="font-size: 18px;") mdi-github]
          v-btn(
            small
            depressed
            outlined
            href="https://opencollective.com/vue-stripe-checkout"
            target="_blank"
            rel="noopener noreferrer"
          ).ma-1.text-none Support #[v-icon(style="font-size: 18px;") mdi-beer-outline]
</template>
