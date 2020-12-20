# PAGES

The '/pages/index.vue' file serves as the page file for the homepage

Each other page should be inside their own folders. Each folder should be named using kebab-case

Ex:

 /pages
  - index.vue
  /page-1
   - index.vue
  /page-2
   - index.vue

# IMPORTING COMPONENTS

All components related to a page shall be imported to the page files.

Ex: Page file of Page 1
<template>
  div
    panel-1
    panel-2
</template>

<script>
import Panel1 from '~/components/page-1/panel-1';
import Panel2 from '~/components/page-1/panel-2';

export default {
  components: {
    Panel1,
    Panel2,
  },
};
</script>


