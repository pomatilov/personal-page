<template>
  <HeaderLayout />

  <NotFoundBlock />

  <FooterLayout fixed />
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue';
import FooterLayout from '@/components/FooterLayout.vue';

import NotFoundBlock from '@/blocks/NotFoundBlock.vue';

import { PageTitleMixin } from '@/mixins/pageTitleMixin';

export default {
  components: {
    HeaderLayout,
    FooterLayout,

    NotFoundBlock,
  },

  mixins: [PageTitleMixin],

  computed: {
    pageTitle() {
      return this.$t('notFound.title');
    },

    dynamicMeta() {
      return [
        { name: 'title', content: this.$t('notFound.title') },
        { name: 'description', content: this.$t('description') },
        { name: 'keywords', content: this.$t('keywords') },
      ];
    },
  },
};
</script>
