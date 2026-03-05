# 构建 REST API

> 难度：⭐⭐ 进阶 | 预计时间：1 小时

用 Node.js + Express 构建一个任务管理 API。这个教程的重点不是 Express 本身，而是怎么用 Trae 把一个模糊的需求变成可以实际运行的接口。

## 目标

完成后你会有一个支持增删改查的任务 API：

```
GET    /tasks        获取所有任务
POST   /tasks        创建任务
PUT    /tasks/:id    更新任务
DELETE /tasks/:id    删除任务
```

## 开始之前

确保安装了 Node.js（v16+）。不需要提前创建项目，Trae 会帮你处理。

## 第一步：生成项目骨架

在 Trae 里描述：

```
用 Node.js + Express 初始化一个任务管理 API 项目：
- 生成 package.json，包含 express、cors、nodemon
- 创建 src/index.js 作为入口
- 数据先用内存存储（一个数组），不需要数据库
- 包含基本的错误处理中间件
```

拿到代码后，运行 `npm install` 和 `npm run dev`，确认服务器能启动。

## 第二步：逐个实现路由

骨架跑起来之后，一个个加路由，加一个测试一个。

**先做创建任务**：

```
在 /tasks 下添加 POST 接口，接收 { title, description } 两个字段：
- title 必填，description 可选
- 自动生成 id（用时间戳）和 createdAt 字段
- 返回创建好的任务对象，状态码 201
```

用 curl 测一下：

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "写周报"}'
```

**再做查询和筛选**：

```
GET /tasks 接口加上可选的查询参数：
- ?status=pending 或 completed，按状态筛选
- ?search=关键词，按标题模糊匹配
两个参数都是可选的，不传就返回全部
```

按这个思路把 PUT 和 DELETE 也补完，每个都跑一遍测试。

## 第三步：加入请求校验

功能跑通了，让 Trae 帮你加校验：

```
给所有路由加入参数校验：
- POST 时 title 为空应该返回 400，错误信息 "title is required"
- PUT 和 DELETE 时 id 不存在应该返回 404
```

这一步让 API 在传错误参数时有正确的响应，而不是程序崩溃或返回奇怪的结果。

## 第四步：整理代码结构

功能完整之后，让 Trae 帮你重构：

```
把代码按 MVC 结构整理一下：
- routes/tasks.js — 路由定义
- controllers/taskController.js — 业务逻辑
- 入口文件只保留服务器启动和中间件注册
```

重构前先确认所有接口还能正常响应。

## 下一步

- [React 组件开发](./react-components.md) — 给这个 API 做一个前端
- [自动化测试实践](./automated-testing.md) — 给 API 写测试
