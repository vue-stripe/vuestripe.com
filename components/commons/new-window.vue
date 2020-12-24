<template lang="pug">
  a(
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
  )
    slot(name="default")
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
