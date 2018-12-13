// 采用AMD规范定义模块

/**
 * 1. 不依赖其他模块
 */
// define(function() {
//   let add = (x, y) => {
//     return x + y
//   }

//   return {
//     add
//   }
// })

/**
* 2. 依赖其他模块
*/

define([
  'lodash'
], function(_) {
  let tail = (array) => {
    return _.tail(array)
  }

  return {
    tail
  }
})
