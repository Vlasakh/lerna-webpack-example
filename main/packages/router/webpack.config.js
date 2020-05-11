/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
    symlinks: true,
  },
  devServer: {
    noInfo: true,
    port: 3000,
    open: true,
    hotOnly: true,
    historyApiFallback: true,
    publicPath: '/',
    // openPage: '/',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'async/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js?)|(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            rootMode: 'upward',
          },
        },
      },
      {
        test: /\.(js?)|(jsx?)$/,
        include: /leaf-local\/src/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            rootMode: 'upward',
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      chunks: 'all',
    },
  },
};
