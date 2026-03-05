# 性能优化

> 难度：⭐⭐⭐⭐ 高级 | 预计时间：2 小时

性能优化的第一原则：先测量，再优化。

AI 能帮你做很多优化，但它不知道你的应用慢在哪里。你需要先找到瓶颈，再把具体的问题告诉 Trae。

## 前端性能

### 找出慢在哪里

打开 Chrome DevTools 的 Performance 面板，录制一次页面加载或关键交互，找出耗时最长的部分。有了数据再问：

```
我的 React 应用在筛选 1000 条数据时有明显卡顿。
分析了一下，TodoList 组件每次筛选都重新渲染了所有 item。
帮我用 useMemo 和 React.memo 优化这个场景：

[粘贴相关组件代码]
```

### 常见的 React 性能问题

**不必要的重新渲染**：最常见的问题。让 Trae 在需要的组件上加 `React.memo`，对引用类型的 props 加 `useMemo`/`useCallback`。

**长列表渲染**：几千条数据用普通 map 渲染会很慢，问 Trae "用 react-virtual 实现虚拟列表"。

**打包体积**：先分析，再优化——

```bash
# Vite 项目
npx vite-bundle-analyzer
```

把大依赖告诉 Trae："lodash 占了 70KB，我只用了 pick 和 omit，怎么优化"。

## 后端性能

### 先看数据库

后端慢，80% 的情况是数据库查询。在 PostgreSQL 里用 `EXPLAIN ANALYZE` 找慢查询：

```sql
EXPLAIN ANALYZE 
SELECT * FROM tasks WHERE user_id = 123 ORDER BY created_at DESC LIMIT 20;
```

把输出丢给 Trae：

```
这个查询跑了 800ms，EXPLAIN ANALYZE 输出如下：
[粘贴输出]

帮我分析原因并给出优化方案
```

### N+1 问题

ORM 用户最常踩的坑：

```
我发现一个 N+1 查询：获取任务列表时，每条任务都单独查了一次所属项目信息。
用 Prisma 的 include 解决这个问题：

[粘贴相关代码]
```

### 加缓存

确认是热点数据、读多写少之后，再考虑加缓存：

```
GET /tasks/:id 读取非常频繁，数据平均每分钟更新 1 次。
用 node-cache 加一个内存缓存，TTL 60 秒。
同时要保证更新操作后缓存能及时失效。
```

## 优化工作流

1. **测量** — 用工具找到实际瓶颈，不要凭感觉猜
2. **定位** — 把具体的数据、代码、报错告诉 Trae
3. **优化** — 应用方案
4. **验证** — 用同样的方式再测一遍，确认有改善
5. **提交** — commit message 里写清楚优化了什么、改善了多少

## 下一步

- 回到 [实战教程首页](./index.md) 浏览其他主题
- 参与 [社区讨论](https://github.com/orgs/trae-community/discussions) 分享你遇到的性能问题
