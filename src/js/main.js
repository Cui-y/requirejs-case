// 主模块: 整个网页的入口代码
// require.config({
//   baseUrl: 'js/lib',
//   paths: {
//     'jquery': 'jquery.min',
//     'lodash': 'lodash.min',
//     // 'zepto': 'https://xxx/libs/zepto/1.2.1/zepto.min'
//   }
// })

require(['lodash', 'jquery'], function(_, $) {
  console.log(_)
  console.log($.ajax)
})
