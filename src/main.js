import {createApp} from 'vue';
import {createI18n} from 'vue-i18n';
import VueHead from 'vue-head';
import Cookies from 'js-cookie';

import router from '@/router';

import {getNavigatorLanguage} from '@/utils/getNavigatorLanguage';
import {ruPluralizationRule} from '@/utils/ruPluralizationRule';

import App from './App.vue';
import messages, {DEFAULT_LOCALE} from './messages';

let userLocale = Cookies.get('locale');

if (!userLocale) {
  const navigatorLanguage = getNavigatorLanguage();

  userLocale =
    navigatorLanguage.indexOf('-') !== -1
      ? navigatorLanguage.substring(0, navigatorLanguage.indexOf('-'))
      : navigatorLanguage;
}

const locale = Object.keys(messages).includes(userLocale) ? userLocale : DEFAULT_LOCALE;

const i18n = createI18n({
  locale,
  pluralizationRules: {
    ru: ruPluralizationRule,
  },
  messages,
});

createApp(App).use(router).use(i18n).use(VueHead).mount('#app');
