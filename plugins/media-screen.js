import Vue from 'vue';

Vue.mixin({
  computed: {
    $isMobile () {
      return this.wXS || this.wSM;
    },
    $isRegularScreen () {
      return this.wMD;
    },
    $isWideScreen () {
      return this.wXL || this.wLG;
    },
  },
});
