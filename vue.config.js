const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
					@import "@/assets/_variable.scss";
					@import "@/assets/_mixin.scss";
				`,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
});
