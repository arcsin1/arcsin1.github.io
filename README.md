# Radix-blog

这是一个基于 ``github page`` 和 ``github api`` 搭建的单页面静态博客，点击[「这里」](http://expendo.github.io)查看博客。

## Fork 使用

将配置文件 ``多说评论`` 配置修改成自己的账号。

## 环境搭建

### 运行环境

- [node.js@5.8.0](https://nodejs.org)

```bash
$ node -v
v5.8.0

$ npm -v
3.7.3
```


### 依赖

- webpack@1.13.2

```bash
$ npm install -g webpack@1.13.2
```

## 命令使用

### 安装

``` bash
$ npm install
```

### 运行

``` js
"scripts": {
  "dev": "cross-env NODE_ENV=development webpack-dev-server --hot --inline",
  "build": "cross-env NODE_ENV=production webpack"
},
```

#### 命令

``` bash
// 开发
$ npm run dev

// 打包
$ npm run build
```

## 技术栈

- react@15.3.1
- react-router@15.3.1
- redux@3.6.0
- webpack@1.13.2
- es6

## 日志更新

### v1.3

- 完全改版风格样式，优化加载速度
### v1.2

- 弃用css 引入less 新增about 修复已知bug

### v1.1

- 给导航增加active样式。

### v1.0

- 个人博客新鲜出炉。

