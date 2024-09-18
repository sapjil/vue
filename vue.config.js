const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
					@import "@/assets/sass/_variable";
					@import "@/assets/sass/_mixin";
				`,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
});
