import {createRouter, createWebHistory} from 'vue-router';

import Cookies from 'js-cookie';

import BlankView from '@/views/BlankView.vue';
import PersonalPageView from '@/views/PersonalPageView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    component: BlankView,
    children: [
      {
        path: '',
        name: 'home',
        component: PersonalPageView,
      },

      {
        path: 'en|ru',
        name: 'home_localized',
        beforeEnter: to => {
          Cookies.set('locale', to.path.replace('/', ''));
        },
        component: PersonalPageView,
      },

      {
        path: '/:pathMatch',
        name: 'not_found',
        component: NotFoundView,
      },
    ],
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
