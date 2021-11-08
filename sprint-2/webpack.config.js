const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  resolve: {
      extensions: ['.ts','.js'],
  },
  rules: [
    {
        test: /\.tsx?$/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/typescript",
            "@babel/env"],
            targets: "> 0.25%, not dead"
          }
        },
        exclude: /node_modules/,
    }
],
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
};