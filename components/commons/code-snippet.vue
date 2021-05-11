<template lang="pug">
  v-card
    pre
      code(:class="lang")
        slot(name="default")
</template>

<script>
import Prism from '~/plugins/prism';
export default {
  props: {
    lang: {
      type: String,
      default: '',
    },
  },
  mounted () {
    Prism.highlightAll();
  },
};
</script>

<style scoped>
pre, code {
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 16px;
}

code {
  display: block;
  white-space: pre-wrap;
  box-shadow: none;
}

code::before {
  content: '';
}
</style>
