// 构建优化配置
({
  appDir: '../src',
  baseUrl: 'js',
  mainConfigFile: '../src/js/main.js',
  optimize: 'uglify',
  optimizeCss: "standard",
  dir: '../dist',
  removeCombined: true,
  paths: {
    jquery: 'lib/jquery.min',
    lodash: 'lib/lodash.min',
  },
  modules: [{
    name: 'main'
  }],
  fileExclusionRegExp: /^(r|build)\.js$/,
  shim: {
    lodash: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    }
  }
})