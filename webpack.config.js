const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/src",
  output: {
    path: path.join(__dirname, "client", "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // {
      //   test: /\.(jpg|png|svg)$/,
      //   loader: "url-loader",
      //   options: {
      //     limit: 25000,
      //   },
      // },
      // {
      //   test: /\.(jpg|png|svg)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[path][name].[hash].[ext]",
      //   },
      // },
    ],
  },
};
