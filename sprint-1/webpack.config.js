const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.ts', './src/style.scss'],
  mode: 'production',
  resolve: {
      extensions: ['.ts','.js'],
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use:'ts-loader',
              exclude: /node_modules/
          },
          {
              test: /\.s[ac]ss$/i,
              use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
              ]
          }
      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].style.css',
    }),
  ],
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
};