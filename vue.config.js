var glob = require('glob');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({ path: './dist' });
module.exports = {
  runtimeCompiler: true,
  css: {
    modules: true,
    sourceMap: true,
  },
  pages: glob.sync('./src/flows/*').reduce(function(map, obj) {
    map[obj.replace(/^.*[\\\/]/, '')] = obj;
    return map;
  }, {}),
  configureWebpack: config => {
    config.output.library = '[name]';
    //config.output.libraryTarget = 'global';
    delete config.output.globalObject;
    //config.output.filename = '[name].js';
    //config.output.chunkFilename = '[name].js';
    config.plugins.push(assetsPluginInstance);
  },
  // chainWebpack: config => {
  //   config.plugin('extract-css').tap(args => {
  //     return [
  //       {
  //         filename: '[name].css',
  //         chunkFilename: '[name].css',
  //       },
  //     ];
  //   });
  // },
};
