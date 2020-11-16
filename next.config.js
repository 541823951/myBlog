const withCss = require("@zeit/next-css");
const path = require("path");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins")
// if (typeof require !== "undefined") {
//   require.extensions[".css"] = (file) => {};
// }


module.exports = withPlugins([withCss,withImages], {
  cssLoaderOptions: {
    importLoaders: 1
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      components: path.resolve(__dirname, "components"),
      static: path.resolve(__dirname, "static"),
      public:path.resolve(__dirname,'public')
    }
    
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      loader: "file-loader",
      options: {
      outputPath: '../public/assets/', // if you don't use ../ it will put it inside ".next" folder by default
      publicPath: 'assets/',
      }
  });
  config.module.rules.push({
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    loader: require.resolve("url-loader")
  });
    return config;
  }
});
