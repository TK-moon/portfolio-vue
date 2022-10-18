const path = require("path")

module.exports = {
  configureWebpack: {
    devtool: "source-map",
    entry: "./src/main.ts",
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/mixins.scss";
        `,
      },
    },
  },
  publicPath: "",
  productionSourceMap: false,
}
