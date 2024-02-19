const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CSSSplitWebpackPluginFix = require("./css-split-plugin/polyfill");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "webpack-dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              experimentalInlineMatchResource: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ["postcss-loader", "less-loader"],
        type: "css",
      },
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CSSSplitWebpackPluginFix({
      size: 4000,
      filename: "css/[name]-[part].[ext]",
    }),
  ],
};
