const path = require("path");
// 절대경로를 위한 모듈을 import

const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
// require("@babel/polyfill");

module.exports = {
  entry: "./src/index.js",
  //진입점이 될 파일
  output: {
    path: path.join(__dirname, "dist"),
    //경로
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", "json"],
    alias: {
      "@images": path.resolve(__dirname, "public/images"),
      "@components": path.resolve(__dirname, "src/components"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
      "@sagas": path.resolve(__dirname, "src/sagas"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@routes": path.resolve(__dirname, "src/routes"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
