const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "tvdemo.js",
    library: "Tvdemo",
    libraryTarget: "umd",
  },
};
