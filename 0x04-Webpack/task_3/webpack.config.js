const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "production",
  devtool: 'inline-source-map',
  entry: {
    header: "./modules/header/header.js",
    body: "./modules/body/body.js",
    footer: "./modules/footer/footer.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  performance: {
    hints: false,
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000,
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8563,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, //webpack@1.x
              disable: true, // webpack@2.x and newer
            }
          }
        ],
      },
    ],
  },
};
