<template lang="pug">
  v-alert(
    border="left"
    colored-border
    color="primary"
    elevation="2"
  )
    v-row(align="top")
      v-col.grow
        p {{content}}
        v-btn(
          v-if="link"
          color="primary"
          rel="noreferrer noopener"
          target="_blank"
          outlined
          small
          depressed
          :href="link"
        ).text-none Read more
          v-icon(size="16") mdi-open-in-new
      v-col.shrink
        nice
</template>

<script>
import Nice from '~/components/commons/nice';
export default {
  components: {
    Nice,
  },
  props: {
    content: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
  },
};
</script>
