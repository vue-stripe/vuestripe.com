/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter'],
        code: ['JetBrains Mono'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#635afe',
          secondary: '#43b983',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#fbd96a',
          secondary: '#43b983',
        },
      },
    ],
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    '@tailwindcss/typography',
    require('daisyui'),
  ],
};
