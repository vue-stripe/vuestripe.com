<template lang="pug">
  div
    v-btn(
      color="success"
      depressed
      outlined
      @click="nice"
    ).text-none Nice!
    v-snackbar(
      v-model="showSnack"
      :timeout="3000"
      color="success"
      top
      center
    ) Nice :)
</template>

<script>
export default {
  data () {
    return {
      showSnack: false,
    };
  },
  methods: {
    nice () {
      this.showSnack = true;
    },
  },
};
</script>
