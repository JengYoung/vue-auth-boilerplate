const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // eslint-disable-next-line
        additionalData: "@import '@/assets/main.scss';",
      },
    },
  },
});
