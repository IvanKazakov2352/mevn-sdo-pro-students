const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../public"),
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4200",
      },
    },
  },
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
  },
};
