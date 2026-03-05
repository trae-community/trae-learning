# 自动化测试实践

> 难度：⭐⭐⭐ 中级 | 预计时间：2 小时

测试是 Vibecoding 里经常被跳过的一步——AI 生成代码很快，写测试感觉会打断节奏。但实际上，AI 在写测试用例上比写业务逻辑更稳定，用好了反而能加速。

这个教程基于 [构建 REST API](./rest-api.md) 的项目，给它写测试。

## 准备

```bash
npm install --save-dev jest supertest
```

在 `package.json` 里加上：

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

## 第一步：让 AI 生成测试用例

不要先自己想要测什么，直接把接口代码丢给 Trae：

```
给这个 POST /tasks 接口写 Jest 测试，用 supertest 发请求，需要覆盖：
- 正常创建任务，返回 201 和任务对象
- title 为空时，返回 400
- 创建后 GET /tasks 能查到这条数据

[粘贴接口代码]
```

AI 往往会想到你没想到的场景：title 是空格时的行为、连续创建多条时 id 是否重复、返回的字段是否完整。

## 第二步：运行并修复

```bash
npm test
```

第一次跑测试通常会有配置问题，比如 ES Module 语法不兼容、测试文件找不到。把错误信息直接粘给 Trae："测试跑不起来，报这个错：[错误信息]"。

## 第三步：覆盖更多场景

基础测试通过后，继续补全：

```
给 PUT /tasks/:id 和 DELETE /tasks/:id 补全测试：
- PUT 更新存在的任务，返回更新后的对象
- PUT 更新不存在的 id，返回 404
- DELETE 删除后 GET 列表不再包含这条数据
- DELETE 不存在的 id，返回 404
```

## 什么值得测，什么可以跳过

**值得写测试的**：
- 有业务规则的逻辑（比如"已完成的任务不能再被编辑"）
- 边界情况（空字符串、超长输入、非法 ID 格式）
- 核心数据流（创建 → 查询 → 更新 → 删除的完整链路）

**可以跳过的**：
- 纯粹的数据透传（没有任何逻辑的 getter）
- 框架本身的行为（不需要测试 Express 的路由匹配）

## 在 CI 里自动跑

本地测试通过后，让 Trae 帮你配置 GitHub Actions：

```
给这个 Node.js 项目添加 GitHub Actions CI 配置：
- 在每次 push 和 PR 时自动跑 npm test
- Node.js 版本用 18
```

## 下一步

- [系统设计](./system-design.md) — 项目规模变大后的设计方法
- [性能优化](./performance-optimization.md) — 找到并修复性能瓶颈
