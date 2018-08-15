# Express-Vue-SPA

> 前后端分离分离项目，nodejs-express做服务端，vue全家桶做前端项目

>nodejs-express构建基础应用
>vue-cli搭建vue项目，修改部分参数以适应个人需求，安装vue-router，vuex，vue-resource, stylus
>迁入util/ repuest
>整合client和server的package.json至外层公共package.json
>修改vue中的build路径至server/public中
>添加build --watch(在vue-cli构建的项目中的build.js中添加--watch选项),修改前端项目后自动打包至server/public


## Build Setup

``` bash
# install dependencies
npm install

# 以webpack-dev-server启动前端项目 localhost:8642
npm run dev

# 打包前端项目至/server/public
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 监听前端项目 实时更新至/server/public
npm run watch

#启动nodejs服务: localhost:3088
npm run server
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
