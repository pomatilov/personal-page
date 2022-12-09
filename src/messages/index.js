import {constants} from '@/constants';

const links = {
  github: `https://github.com/${constants.github_user}`,
  telegram: `https://t.me/${constants.telegram_user}`,
  email: `mailto://${constants.email}`,
};

export const DEFAULT_LOCALE = 'en';

export default {
  ru: {
    personal: {
      name: 'Дмитрий Поматилов',
      position: 'Middle Full-stack разработчик',
    },

    home: {
      greetings: 'Привет!',

      personal: "Я — @:personal.name{','} @:personal.position",
    },

    stack: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Базы данных',
      other: 'Прочие',
    },

    skills: {
      systems: 'Проектирование и разработка web-сервисов и приложений',
      optimization: 'Проектирование и оптимизация бизнес-логики',
      libraries: 'Создание подключаемых библиотек JS и PHP бандлов',
      review: 'Код ревью',
      prototype: 'Прототипирование интерфейса в Figma',
      docker: 'Докеризация web-приложений',
      releases: 'Управление релизами команды',
    },

    views: {
      stack: 'Стэк и технологии',
      skills: 'Умения и навыки',
    },

    link: {...links},

    title: "@:personal.name{','} @:personal.position",
    description: "@:skills.systems{','} @:skills.docker{','} @:skills.optimization",
    keywords:
      "@:personal.name{','} @:personal.position{','} @:skills.systems{','} @:skills.docker{','} @:skills.optimization",
    copyright: "© 2022 @:personal.name{'.'} All rights reserved.",

    notFound: {
      title: 'Страница не найдена',
      header: 'Здесь не на что смотреть...',
      goHome: 'Вернуться на главную',
    },
  },

  en: {
    personal: {
      name: 'Dmitry Pomatilov',
      position: 'Middle Full-stack developer',
    },

    home: {
      greetings: 'Hello there!',

      personal: "I am @:personal.name{','} @:personal.position",
    },

    stack: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Databases',
      other: 'Others',
    },

    skills: {
      systems: 'Design & develop of web-services & applications',
      optimization: 'Design & optimization of business logic',
      libraries: 'Create pluggable JS libraries & PHP bundles',
      review: 'Code review',
      prototype: 'Prototype UI in Figma',
      docker: 'Dockerize web-applications',
      releases: 'Manage team releases',
    },

    views: {
      stack: 'Technologies',
      skills: 'Skills',
    },

    link: {...links},

    title: "@:personal.name{','} @:personal.position",
    description: "@:skills.systems{','} @:skills.docker{','} @:skills.optimization",
    keywords:
      "@:personal.name{','} @:personal.position{','} @:skills.systems{','} @:skills.docker{','} @:skills.optimization",
    copyright: "© 2022 @:personal.name{'.'} All rights reserved.",

    notFound: {
      title: 'There is nothing',
      header: 'Nothing to see here...',
      goHome: 'Go to the main page',
    },
  },
};
