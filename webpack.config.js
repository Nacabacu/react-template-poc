const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    templateA: [
      './src/shared/data.ts',
      './src/templateA/index.tsx',
    ],
    templateB: [
      './src/shared/data.ts',
      './src/templateB/index.tsx',
    ]
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
    compress: false,
    port: 9000,
  },
};
