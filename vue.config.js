// vue config

const path = require("path")

module.exports = {
  configureWebpack: {
    resolve: {},
    devtool: "source-map",
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg")

    svgRule.uses.clear()

    svgRule.use("vue-svg-loader").loader("vue-svg-loader")
  },
}
