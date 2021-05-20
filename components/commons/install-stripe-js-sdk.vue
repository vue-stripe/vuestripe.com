<template lang="pug">
  div
    v-tabs(v-model="step1TabModel")
      v-tab(href="#html") HTML
      v-tab(href="#nuxt") Nuxt
    v-tabs-items(v-model="step1TabModel")
      v-tab-item(value="html")
        code-snip(lang="language-html") {{importScriptHtml}}
      v-tab-item(value="nuxt")
        code-snip(lang="language-javascript") {{importScriptNuxt}}
</template>

<script>
import CodeSnip from '~/components/commons/code-snippet';
import importScriptHtml from '~/assets/snippets/import-script-html.md';
import importScriptNuxt from '~/assets/snippets/import-script-nuxt.md';
export default {
  components: {
    CodeSnip,
  },
  data () {
    this.importScriptHtml = importScriptHtml;
    this.importScriptNuxt = importScriptNuxt;
    return {
      step1TabModel: 'html',
    };
  },
};
</script>
