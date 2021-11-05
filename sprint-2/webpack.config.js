const path = require('path');

module.exports = {
  entry: './src/index.ts',
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
          }
      ]
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
};