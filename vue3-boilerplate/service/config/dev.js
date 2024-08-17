'use strict'

const { merge } = require('webpack-merge')

const baseWebpackConfig = require('./base')
const cssWebpackConfig = require('./css')
const config = require('../project.config')
const packageJson = require('../../package.json')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = merge(baseWebpackConfig, cssWebpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'vue',
      filename: 'remoteEntry.js',
      exposes: {
        './Main': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],

  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }],
    },
    devMiddleware: {
      publicPath: config.dev.publicPath,
    },
    open: false,
    host: '0.0.0.0',
    port: config.dev.port,
    liveReload: false,
  },

  infrastructureLogging: {
    level: 'warn',
  },

  stats: {
    assets: false,
    modules: false,
  },
})
