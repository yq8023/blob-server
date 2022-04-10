# 一、项目初始化

### 基本介绍

本项目为博客系统的 Server 端，采用的框架为 Koa

数据库为 Mysql，通过 Sequelize 进行数据库连接

博客系统的 FE 为： https://github.com/yq8023/blob-system

### 快速开始

**1.安装依赖：npm i**

**2.初始化所有数据库表：node src/model/init.js**

**3.项目运行：npm run dev**

**4.将.env 文件的数据库配置改为自己的数据库**

### 目录介绍

```js
src
    | -- app; // 服务主文件
    | -- config; // 配置，注入环境变量
    | -- constant; // 常量定义，主要是错误类型
    | -- controller; // 路由控制层
    | -- db; // 数据库连接
    | -- middleware; // 中间件
    | -- model; // 模型定义
    | -- router; // 路由定义
    | -- service; // service层
```
