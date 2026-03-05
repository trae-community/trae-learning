# 你的第一个 Vibecoding 项目

> 难度：⭐ 入门 | 预计时间：30 分钟

我们来做一件实际的事：从零开始，用 Trae 构建一个天气查询页面。它能根据你输入的城市名，调用真实 API 显示当前天气。

做完之后，你会体会到 Vibecoding 和传统开发节奏的差异。

## 准备工作

- 安装好 [Trae](https://trae.ai)
- 一个免费的天气 API Key（[OpenWeatherMap](https://openweathermap.org/api) 免费注册即可获得）
- 有基本的 HTML/JavaScript 了解就够了

## 第一步：描述你想要什么

打开 Trae，新建一个空文件夹，然后在对话框里输入：

```
创建一个天气查询页面，要求：
- 单页面，纯 HTML + CSS + JavaScript，不需要框架
- 顶部有城市名输入框和查询按钮
- 查询结果显示温度、天气描述、湿度、风速
- 使用 OpenWeatherMap API，Base URL: https://api.openweathermap.org/data/2.5/weather
- 样式简洁大方，有加载状态和错误提示
```

AI 会生成一个完整的 `index.html`。

## 第二步：看懂再运行

在直接打开浏览器之前，先大概浏览一遍生成的代码：

- API 调用的地方在哪？（搜索 `fetch` 关键字）
- 城市名是怎么传入请求的？
- 如果 API 返回错误，代码是怎么处理的？

不需要每行都看懂，但要对整体结构有个印象。如果哪里看不明白，选中那段代码，在 Trae 里问"这里在做什么"。

## 第三步：填入 API Key 并运行

找到代码里的 `API_KEY` 或 `YOUR_API_KEY`，替换成你的真实 Key，然后在浏览器里打开 `index.html`。

搜索 `Beijing` 应该能看到北京的当前天气数据。

## 第四步：迭代改进

跑起来之后，想想有什么可以改进的。比如：

- 温度单位是开尔文，改成摄氏度
- 加上天气图标（OpenWeatherMap 提供图标 URL）
- 支持回车键提交，不用每次点按钮

每次改一个小需求，直接告诉 Trae：

```
温度现在显示的是开尔文，改成摄氏度，在数字后面加 °C
```

这是 Vibecoding 的典型节奏：运行 → 发现问题 → 用语言描述 → AI 修改 → 再运行。

## 常见问题

**API 返回 401**：Key 填错了，或者刚注册的 Key 需要等几分钟激活。

**城市找不到**：OpenWeatherMap 接受英文城市名，输入 `Beijing` 而不是 `北京`。

**想要更好看的样式**：告诉 Trae "参考 iOS 天气 app 的风格，重新设计一下样式"。

## 下一步

- [构建 REST API](./rest-api.md) — 做后端接口
- [React 组件开发](./react-components.md) — 进入前端框架
