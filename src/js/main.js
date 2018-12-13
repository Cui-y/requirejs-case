// 主模块: 整个网页程序的入口代码
require.config({
  shim: {
    'underscore': {
      exports: '_'
    },

    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
})

// 加载正常的符合AMD规范的模块（例如jQuery，lodash）
require(['jquery', 'utils'], function($, utils) {
  console.log($.ajax)
  console.log(utils.tail([2,3,4,3]))
})

// 加载非规范模块 (例如underscore, backbone)
// 需要使用到require.config()定义它们的一些特征, 用到shim属性，专门来处理一些不兼容的模块
// 每个非规范模块要定义两个值：exports值（外部调用名称）| deps数组(模块依赖性)
require(['underscore'], function(_) {
  console.log(_)
})
