# Brunch app

This is HTML5 application, built with [Brunch](http://brunch.io).

## Getting started
* 首先安装node环境（如果没有的话）
* 安装 brunch `npm i brunch -g`
* 环境配置在`app/box.coffee`文件内
* 运行brunch w -s 进入开发模式，此时访问[api.debug.rjft.net:3333/index.html](api.debug.rjft.net:3333/index.html), 所有更改就会实时在页面端反应出来。

## 部署
* 提交代码
* `ssh rjfittime.com`
* 测试代码在`/opt/test`目录下。生产代码在`/opt`下
* `cd` 到相应目录，执行`sh deploy.sh`

## 重要目录与文件
* frame 左侧导航栏代码
* pages 所有页面代码, 每个page目录内都有一个index.styl文件，负责页面的样式
* pages/common 封装一些公用组件
* Hash.coffee 封装浏览器内的hash string，用于导航跳转
* router.coffee 路由，负责跳转
* box.coffee 配置文件
* under.coffee util 文件，封装一些常用的逻辑操作, 比如ajax请求

