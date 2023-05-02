const path = require("path");

module.exports = {
  build: {
    extend(config, ctx) {
      config.resolve.alias["@"] = path.resolve(__dirname);
      config.output.libraryExport = "default";
      config.entry = {
        app: "./src/entry.js",
        tvdemo: "./src/component/TvDemo.vue",
      };
      config.output.filename = "[name].min.js";
      config.output.library = "[name]";
      config.output.libraryTarget = "umd";
      config.output.jsonpFunction = `webpackJsonp_${ctx.nuxt ? "nuxt" : "app"}`;
      config.externals = {
        vue: "Vue",
      };
      if (ctx.isServer) {
        config.externals.splice(0, 0, (context, request, callback) => {
          if (/\/tvdemo\.min\.js$/.test(request)) {
            return callback(null, `commonjs ${request}`);
          }
          callback();
        });
      }
    },
  },
};
