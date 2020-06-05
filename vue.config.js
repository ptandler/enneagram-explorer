// vue config

const path = require("path")

module.exports = {
  publicPath: "", // use relative paths (CSS will be at root as well)
  outputDir: "docs",
  configureWebpack: {
    resolve: {
      alias: {
        "package.json": path.resolve(__dirname, "package.json"),
      },
    },
    devtool: "source-map",
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg")

    svgRule.uses.clear()
    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .options({
        svgo: {
          plugins: [{ removeDoctype: true }, { removeComments: true }, { removeViewBox: false }],
          removeViewBox: false,
        },
      })
      .end()
  },
  devServer: {
    disableHostCheck: true,
  },
}
