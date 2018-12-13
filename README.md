# RequireJS项目

## 模块化思想

模块就是一组实现特定功能的方法函数

模块化是指在解决某一个复杂问题或者一系列的杂糅问题时，依照一种分类的思维把问题进行系统性的分解以之处理。模块化是一种处理复杂系统分解为代码结构更合理，可维护性更高的可管理的模块的方式。可以想象一个巨大的系统代码，被整合优化分割成逻辑性很强的模块时，对于软件是一种何等意义的存在。对于软件行业来说：解耦软件系统的复杂性，使得不管多么大的系统，也可以将管理，开发，维护变得“有理可循”。

浏览器端有了模块化思想之后，开发者就可以只关注核心代码的编写，其他部分功能就可以很方便的使用别人已经写好的模块。

## 什么是require.js

require.js 是浏览器端管理模块的工具库，基于AMD规范。
require.js解决了两个问题:
-1. 实现js文件异步加载，避免网页失去响应
-2. 管理模块之间依赖关系，便于代码的编写和维护

## 优化配置

require 要求每个模块都是一个单独的js

当依赖的模块较多时，浏览器会发出多个http请求， 故Require官方推出一个优化工具r.js，可以在模块部署完成之后将多个模块合并成一个文件中，减少http请求

## Usage

### 全局安装requirejs

```shell
sudo npm i -g requirejs
```

直接命令行运行优化工具

```shell
r.js -o tools/build.js
```

or

直接执行npm scripts

```shell
yarn r.js
```

### 非全局安装requirejs

> 该情况下需要[下载](https://requirejs.org/docs/download.html)r.js文件到tools文件夹

运行命令

```shell
node tools/r.js -o tools/build.js
```

## 参考链接

[require.js官网](https://requirejs.org/)
[单页应用优化示例](https://github.com/volojs/create-template)
[多页应用优化示例](https://github.com/requirejs/example-multipage-shim)
