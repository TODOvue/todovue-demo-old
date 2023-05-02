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
  entry: {
    umd: ["@/assets/scss/_global.scss", "@/component/TvDemo.vue"],
  },
  output: {
    filename: "tvdemo.js",
    library: "Tvdemo",
    libraryTarget: "umd",
  },
};
