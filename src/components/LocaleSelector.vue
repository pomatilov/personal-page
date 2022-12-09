<template>
  <div class="lang-selector">
    <template v-for="locale in availableLocales" :key="locale">
      <a
        class="lang-selector__item"
        :class="{active: currentLocale === locale}"
        :title="locale"
        href="javascript:void(0);"
        @click="
          () => {
            onLocaleSelected(locale);
          }
        "
        @keydown="() => {}"
      >
        {{ locale }}
      </a>
    </template>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

import messages from '@/messages';

const availableLocales = Object.keys(messages);

export default {
  data: () => ({
    availableLocales,
  }),

  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
  },

  watch: {
    currentLocale: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          document.documentElement.setAttribute('lang', newVal);
        }
      },
    },
  },

  methods: {
    onLocaleSelected(locale) {
      if (locale === this.currentLocale) {
        return;
      }

      this.$i18n.locale = locale;

      Cookies.set('locale', locale);
    },
  },
};
</script>

<style scoped lang="scss">
.lang-selector {
  display: none;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0.75em 0;

  order: 2;

  @include mobile-and-bigger {
    display: flex;
    width: 140px;
  }

  @include laptop-and-bigger {
    order: 3;
  }

  .lang-selector__item {
    margin-right: 1em;
    text-transform: uppercase;

    font-size: 14px;
    line-height: 20px;
    text-decoration: none;

    cursor: pointer;

    &.active {
      color: $c-primary;

      cursor: default;
    }
  }

  .lang-selector__item:first-child {
    margin-right: 0;
  }
}
</style>
