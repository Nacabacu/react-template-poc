const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const templateData = require('./data.json');

module.exports = {
  entry: {
    templateA: './src/templateA/index.tsx',
    templateB: './src/templateB/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new DefinePlugin({
      TEMPLATE_DATA: JSON.stringify(templateData),
    }),
    new HtmlWebpackPlugin({
      template: './src/templateA/index.html',
      filename: 'templateA.html',
      chunks: ['templateA'],
    }),
    new HtmlWebpackPlugin({
      template: './src/templateB/index.html',
      filename: 'templateB.html',
      chunks: ['templateB'],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
