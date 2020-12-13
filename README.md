## 微前端 DEMO
本 DEMO 使用的是微前端框架 [qiankun](https://qiankun.umijs.org/zh/guide)。包含了三个应用：
* main：主应用，使用 vue-cli 创建。
* vue：子应用，使用 vue-cli 创建。
* react: 子应用，使用的 react 16 版本。

主应用其实就是一个底座，没什么功能，只有跳转到子应用的功能。
## 安装
在三个目录下分别执行
```
npm i
```
## 开发
在三个目录下分别执行
```
npm run dev
```
然后打开网页，访问主应用 `http://localhost:8000/`。

子应用也可单独访问：
* Vue 子应用：`http://localhost:8001/`
* React 子应用：`http://localhost:8002/`
## 部署
将三个应用打包后的文件复制到 `main-static`、`vue-static`、`react-static` 目录，然后运行三条命令：
* `node main-server.js`
* `node vue-server.js`
* `node react-server.js`

即可开始访问页面。

访问主应用 `http://localhost:8000/`。

访问子应用：
* Vue 子应用：`http://localhost:8001/`
* React 子应用：`http://localhost:8002/`
