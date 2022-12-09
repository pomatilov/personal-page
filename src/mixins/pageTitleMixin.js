/* eslint-disable func-names */
/* eslint-disable object-shorthand */
export const PageTitleMixin = {
  head: {
    title: function () {
      return {
        inner: '',
        separator: '\u00a0',
        complement: this.pageTitle,
      };
    },

    meta: function () {
      return [...this.dynamicMeta];
    },
  },

  computed: {
    pageTitle() {
      return this.$t('title');
    },

    dynamicMeta() {
      return [
        {name: 'title', content: this.$t('title')},
        {name: 'description', content: this.$t('description')},
        {name: 'keywords', content: this.$t('keywords')},
      ];
    },
  },

  watch: {
    pageTitle: {
      handler() {
        this.updateHead();
      },
    },
  },
};

export default PageTitleMixin;
