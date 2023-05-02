module.exports = {
  css: {
    extract: {
      filename: "[name].css",
      chunkFilename: "[name].css",
    },
  },
  configureWebpack: {
    entry: "./src/component/TvDemo.vue",
    output: {
      filename: "tvdemo.min.js",
      library: "TvDemo",
      libraryExport: "default",
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    externals: {
      vue: "Vue",
    },
  },
};
