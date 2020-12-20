<template lang="pug">
  pre
    code(:class="lang").elevation-0
      slot(name="default")
</template>

<script>
import Prism from '~/plugins/prism';
export default {
  props: {
    lang: {
      type: String,
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
</style>
