<template>
  <div :data-theme="theme">
    <div :class="`navbar fixed bg-base-100 z-40 shadow-sm`">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <!-- <li>
              <nuxt-link class="btn btn-ghost" to="/">Terminal<b>_</b></nuxt-link>
            </li>
            <li>
              <nuxt-link class="btn btn-ghost" to="/gui">GUI</nuxt-link>
            </li>
            <li>
              <nuxt-link class="btn btn-ghost" to="/uses">Uses</nuxt-link>
            </li>
            <li>
              <nuxt-link class="btn btn-ghost" to="/open-source">Open Source</nuxt-link>
            </li> -->
          </ul>
        </div>
        <nuxt-link class="btn btn-ghost normal-case md:text-xl" to="/">
          <i class="las la-credit-card text-3xl"></i>
          Vue Stripe
        </nuxt-link>
      </div>
      <div class="navbar-end gap-4">
        <div class="hidden lg:flex">
          <!-- <nuxt-link class="btn btn-ghost" to="/">Terminal<b>_</b></nuxt-link>
          <nuxt-link class="btn btn-ghost" to="/gui">GUI</nuxt-link>
          <nuxt-link class="btn btn-ghost" to="/uses">Uses</nuxt-link>
          <nuxt-link class="btn btn-ghost" to="/open-source">Open Source</nuxt-link> -->
        </div>
        <button
          class="btn btn-circle"
          @click="toggleTheme = !toggleTheme"
        >
          <i v-if="toggleTheme" class="las la-sun text-2xl"></i>
          <i v-else class="las la-moon text-2xl"></i>
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from '../../.nuxt/vue-router';
const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
export default {
  setup () {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem('daisyui-theme', value);
    });
    onMounted(() => {
      theme.value = localStorage.getItem('daisyui-theme') || 'dark';
      toggleTheme.value = theme.value === 'dark';
    });

    const toggleTheme = ref(false);
    watch(toggleTheme, (value) => {
      if (value) {
        theme.value = 'dark';
      } else {
        theme.value = 'light';
      }
    });

    const route = useRoute();
    console.warn('route', route.name);
    const isGui = computed(() => route.name === 'gui');

    return {
      toggleTheme,
      theme,
      themes: THEMES,
      isGui,
    };
  },
};
</script>
