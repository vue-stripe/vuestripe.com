<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        h1.mb-1 Stripe Element Plugin
        page-alert(content="Vue.js plugin for Stripe, and Stripe Elements")
        p Since not all of the Stripe Elements types are supported yet, I decided to expose the Stripe, and Elements via Vue prototype. This will give you full control over the usage of Stripe object, and Stripe Elements instance.
        p You can use this without using the other Vue Stripe components.
      v-col(cols="12" md="10")
        h1.mb-5 Install
        p Add the Stripe js sdk in the html head.
        code-snip(lang="language-html") {{elementsPluginUsageAddSdk}}
        p Import and register the #[code StripeElementsPlugin] plugin.
        code-snip(lang="language-javascript") {{elementsPluginUsage}}
        p This will give you access to #[code this.$stripe], and #[code this.$stripeElements]. Where #[code this.$stripe] = #[code window.Stripe(PUBLISHABLE_KEY, options)], and #[code this.$stripeElements] = #[code Stripe.elements()].
        p With this, you can now access the Elements methods like, #[code .create], #[code .getElement], and more. See #[a(src="https://stripe.com/docs/js/elements_object/create" rel="noreferrer noopener") here].
      v-col(cols="12" md="10")
        h1.mb-5 Use Case
        p Separate components for each card fields.
        p Official component for these are still in development. So this is just a sample to help you implement them on your own.
        h1.mb-5 Live Demo
        v-card
          v-card-text
            label Card Number
            div#card-number.mb-2
            label Card Expiry
            div#card-expiry.mb-2
            label Card CVC
            div#card-cvc.mb-2
            div#card-error
            button(@click="createToken")#custom-button Generate Token
            v-dialog(v-model="tokenDialog" width="600")
              v-card
                v-toolbar(
                  flat
                  color="primary"
                  dark
                )
                  v-toolbar-title Tokenized customer card from Stripe
                  v-spacer
                  v-btn(icon @click="tokenDialog = false")
                    v-icon mdi-close
                v-card-text.px-2.py-1
                  code-snip(lang="language-javascript") {{token}}
        code-snip(lang="language-html") {{elementsPluginUsageSeparateElements}}
</template>

<script>
import headMeta from '~/utils/head-meta';
import PageAlert from '~/components/commons/page-alert';
import CodeSnip from '~/components/commons/code-snippet';
import elementsPluginUsageAddSdk from '~/assets/snippets/stripe-elements/plugin-usage-add-sdk.md';
import elementsPluginUsage from '~/assets/snippets/stripe-elements/plugin-usage.md';
import elementsPluginUsageSeparateElements from '~/assets/snippets/stripe-elements/plugin-usage-separate-elements.md';
export default {
  layout: 'docs',
  components: {
    PageAlert,
    CodeSnip,
  },
  data () {
    this.elementsPluginUsageAddSdk = elementsPluginUsageAddSdk;
    this.elementsPluginUsage = elementsPluginUsage;
    this.elementsPluginUsageSeparateElements = elementsPluginUsageSeparateElements;
    return {
      tokenDialog: false,
      token: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
    };
  },
  mounted () {
    const style = {
      base: {
        color: 'black',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.cardNumber = this.$stripeElements.create('cardNumber', { style });
    this.cardNumber.mount('#card-number');
    this.cardExpiry = this.$stripeElements.create('cardExpiry', { style });
    this.cardExpiry.mount('#card-expiry');
    this.cardCvc = this.$stripeElements.create('cardCvc', { style });
    this.cardCvc.mount('#card-cvc');
  },
  beforeDestroy () {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  },
  methods: {
    async createToken () {
      const { token, error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        console.error(error);
        document.getElementById('card-error').innerHTML = error.message;
        return;
      }
      this.tokenDialog = true;
      this.token = token;
    },
  },
  head () {
    return {
      ...headMeta({
        title: 'Elements Plugin - Vue Stripe Elements',
        description: 'How to use Stripe Elements fields separately in Vue',
        socialBanner: require('../../assets/images/vue-stripe-logo-variant-1-small.png'),
      }),
      script: [
        {
          type: 'text/javascript',
          src: '//cdn.carbonads.com/carbon.js?serve=CEBIEK3Y&placement=vuestripecom',
          id: '_carbonads_js',
          async: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
#custom-button {
  height: 30px;
  outline: 1px solid grey;
  background-color: green;
  padding: 5px;
  color: white;
}

#card-error {
  color: red;
}

#carbonads {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
  Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#carbonads {
  display: flex;
  max-width: 330px;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, .1);
}

#carbonads a {
  color: inherit;
  text-decoration: none;
}

#carbonads a:hover {
  color: inherit;
}

#carbonads span {
  position: relative;
  display: block;
  overflow: hidden;
}

#carbonads .carbon-wrap {
  display: flex;
}

.carbon-img {
  display: block;
  margin: 0;
  line-height: 1;
}

.carbon-img img {
  display: block;
}

.carbon-text {
  font-size: 13px;
  padding: 10px;
  line-height: 1.5;
  text-align: left;
}

.carbon-poweredby {
  display: block;
  padding: 8px 10px;
  background: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 600;
  font-size: 9px;
  line-height: 1;
}
</style>
