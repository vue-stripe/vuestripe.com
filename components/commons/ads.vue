<template lang="pug">
  div(
    :style="{ height, width }"
  )
    adsbygoogle(
      :ad-slot="adSlot"
    ).pink
</template>

<script>
export default {
  props: {
    adSlot: {
      type: String,
    },
  },
  computed: {
    height () {
      return this.$isMobile ? '280px' : '280px';
    },
    width () {
      return this.$isMobile ? '320px' : '727px';
    },
  },
};
</script>
