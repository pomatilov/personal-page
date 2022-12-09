const { defineConfig } = require('@vue/cli-service');

const predefinedStyleVariables = [
  '~@/assets/styles/_animations.scss',
  '~@/assets/styles/_constants.scss',
  '~@/assets/styles/_fonts.scss',
  '~@/assets/styles/_mixins.scss',
  '~@/assets/styles/_base.scss',
];

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: predefinedStyleVariables.map(style => `@import "${style}";`).join(''),
      },
    },
  },
});
