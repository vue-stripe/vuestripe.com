<script>
export default {
  name: 'CarbonAds',
  watch: {
    $route (to, from) {
      if (
        to.path !== from.path &&
        // Only reload if the ad has been loaded
        // otherwise it's possible that the script is appended but
        // the ads are not loaded yet. This would result in duplicated ads.
        this.$el.querySelector('#carbonads')
      ) {
        this.$el.innerHTML = '';
        this.load();
      }
    },
  },
  mounted () {
    if (process.env.NODE_ENV === 'production') {
      this.load();
    }
  },
  methods: {
    load () {
      const caServe = process.env.CA_SERVE;
      const caPlacement = process.env.CA_PLACEMENT;
      const script = document.createElement('script');
      script.id = '_carbonads_js';
      script.src = `//cdn.carbonads.com/carbon.js?serve=${caServe}&placement=${caPlacement}`;
      this.$el.appendChild(script);
    },
  },
  render (h) {
    return h('div', { class: 'carbon-ads' });
  },
};
</script>

<style>
#carbonads {
  display: flex;
  float: right;
  margin: 0 0 20px 20px;
  max-width: 130px;
  border-radius: 3px;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 0 0 1px hsla(0, 0%, 0%, .15);
  font-size: 11px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#carbonads a {
  color: #111;
  text-decoration: none;
}

#carbonads a:hover {
  color: #111;
}

.carbon-img {
  display: block;
  margin-bottom: 8px;
  max-width: 130px;
  line-height: 1;
}

.carbon-img img {
  display: block;
  margin: 0 auto;
  max-width: 130px;
  border-radius: 3px 3px 0  0;
  width: 130px;
  height: auto;
}

.carbon-text {
  display: block;
  padding: 0 10px 8px;
  text-align: left;
  line-height: 1.35;
}

.carbon-poweredby {
  display: block;
  padding: 10px;
  background: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 600;
  font-size: 8px;
  line-height: 0;
}

@media only screen and (min-width: 320px) and (max-width: 759px) {
  #carbonads {
    position: relative;
    float: none;
    margin: 20px 0;
    max-width: 330px;
  }

  .carbon-wrap {
    display: flex;
    flex-direction: row;
  }

  .carbon-img {
    margin: 0;
  }

  .carbon-text {
    padding: 10px 10px 0 10px;
    font-size: 12px;
  }

  .carbon-poweredby {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 0;
    border-top-left-radius: 3px;
    text-align: center;
  }
}
</style>
