# react-ts-admin

A simple project with react-ts

# 1. Create Project

## 1.1 [create-react-app](https://create-react-app.dev/docs/getting-started)

```bash
pnpm dlx create-react-app react-ts-admin --template typescript
```

[Selecting a template](https://create-react-app.dev/docs/getting-started#selecting-a-template)

- typescript
- redux

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
pnpm add redux react-redux @reduxjs/toolkit
```

## 4.2 [mobx](https://www.mobxjs.com/)

MobX is a simple, scalable and battle tested state management solution. [Ten minute introduction to MobX and React](https://mobx.js.org/getting-started)

Making React reactive by mobx.

# 5. Request Lib

## 5.1 axios

# 6. Hook Lib

## 6.1 [ahooks](https://ahooks.js.org/zh-CN/hooks/use-request/index)

React 中常用的 hooks 库，包含多种尝尽中使用的 hook。如：

- useRequest，一个强大的异步数据管理的 Hook。

# 6. UI Lib

## 6.1 [antd](https://ant.design/components/overview-cn)

一个企业级 React UI 库，分别有 react、vue、angular 版本。

```bash
# used in react
> pnpm add antd
```

```ts
// 引入css样式
import "antd/dist/reset.css";
```

## 6.2 [Ant Motion](https://motion.ant.design/index-cn)

一个高效的动效库。

# 7. [Craco](https://craco.js.org/)

To customize most things when using Create React App, you can eject. However, you'll then need to maintain every configuration and script yourself, which can be a bit annoying. CRACO, which stands for Create React App Configuration Override, allows you to get all of the benefits of Create React App without ejecting. Customize your configurations ESLint, Babel, PostCSS, and many more with just a single configuration file at the root of your project.

```bash
# install craco
# https://craco.js.org/docs/getting-started/
pnpm add @craco/craco -D
```
