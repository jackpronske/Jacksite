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
    ],
  },
};
