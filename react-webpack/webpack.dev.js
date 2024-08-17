const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

module.exports = merge(common, {
  mode: 'development',
  cache: {
    type: 'memory',
  },
  devtool: 'inline-source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        vue: 'vue@http://localhost:8080/remoteEntry.js',
      },
      shared: {
        vue: {
          singleton: true,
        },
        'vue-router': {
          singleton: true,
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 3000,
    liveReload: true,
    /* proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    }, */
  },
});
