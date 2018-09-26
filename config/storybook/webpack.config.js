const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('@vue/cli-service/webpack.config.js');
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module = config.module;
  defaultConfig.resolve = config.resolve;
  defaultConfig.resolveLoader = config.resolveLoader;
  defaultConfig.plugins.push(new VueLoaderPlugin());
  return defaultConfig;
};
