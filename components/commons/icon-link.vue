<template lang="pug">
  v-icon(
    :href="link"
    @click="go"
  ).primary--text.icon-link {{icon}}
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'mdi-open-in-new',
    },
  },
  methods: {
    go () {
      window.open(this.link, '_blank', 'noopener noreferrer');
    },
  },
};
</script>

<style scoped>
.icon-link {
  font-size: 15px;
}

.icon-link:hover,
.icon-link:active,
.icon-link:focus {
  cursor: pointer;
}
</style>
