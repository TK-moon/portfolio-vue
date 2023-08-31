const { defineConfig } = require("@vue/cli-service")
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const path = require("path")

module.exports = defineConfig({
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
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
          @import "@/styles/variables.scss";
          @import "@/styles/breakpoints.scss";
        `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  productionSourceMap: false,
})
