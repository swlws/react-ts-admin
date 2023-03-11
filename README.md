# react-ts-admin

A simple project with react-ts

# 1. Create Project

## 1.1 create-react-app

```bash
pnpm dlx create-react-app react-ts-admin --template typescript
```

## 1.2 [dvajs](https://github.com/dvajs/dva)

🌱 React and redux based, lightweight and elm-style framework. (Inspired by elm and choo)

```bash
# 新建工程
$ npm install dva-cli -g
$ dva -v
dva-cli version 0.9.1

$ dva new dva-quickstart
```

## 1.3 [umi](https://v3.umijs.org/zh-CN/docs)

Umi 是蚂蚁集团的底层前端框架，Umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。然后配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。

```bash
# 新建工程
$ yarn create @umijs/umi-app
```

# 2. Route

```bash
# 路由
pnpm add react-route-dom
```

# 3. Style

```bash
# 支持SASS
pnpm add node-sass -D
```

# 4. State Management

## 4.1 [Redux](https://cn.redux.js.org/introduction/getting-started/)

```bash
# redux
# reduxjs为状态管理库
# react-redux用于连接reduxjs与react的连接
# react-thunk为中间件，使用react-redux具备异步操作的能力
pnpm add @reduxjs/toolkit react-redux
```

## 4.2 [mobx](https://www.mobxjs.com/)

MobX is a simple, scalable and battle tested state management solution. [Ten minute introduction to MobX and React](https://mobx.js.org/getting-started)

# 5. Request Lib

## 5.1 axios

## 5.2 ahooks

# 6. UI

## 6.1 antd
