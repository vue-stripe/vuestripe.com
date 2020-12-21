<template lang="pug">
  v-alert(
    border="left"
    colored-border
    color="primary"
    elevation="2"
  )
    v-row(align="center")
      v-col.grow
        | {{content}}
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
      default: '',
    },
  },
};
</script>
