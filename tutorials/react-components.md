# React 组件开发

> 难度：⭐⭐ 进阶 | 预计时间：1.5 小时

React 组件开发是 Vibecoding 最常见的场景之一。这个教程带你用 Trae 做一个完整的待办事项应用，同时学会怎么 review 和迭代 AI 生成的 React 代码。

## 准备

```bash
npx create-react-app todo-app --template typescript
cd todo-app
npm start
```

## 第一步：生成 TodoList 组件

在 Trae 里描述：

```
创建一个 TodoList 组件，用 TypeScript：
- 显示任务列表，每项有标题和完成状态
- 顶部有输入框和按钮，支持回车提交
- 点击任务标题切换完成状态，完成的加删除线
- 每项右侧有删除按钮
- 所有状态放在组件内，不需要 Redux
```

把生成的代码放到 `src/components/TodoList.tsx`，在 `App.tsx` 里引入跑起来。

跑起来之前先读一遍代码，特别关注 `useState` 里存了什么结构、每个事件处理函数在做什么。有不明白的地方就问。

## 第二步：拆分子组件

整个功能在一个组件里能跑，但随着功能增加会越来越难维护。让 Trae 帮你拆：

```
把 TodoList 拆成三个组件：
- TodoInput — 只负责输入框，通过 onAdd 回调传出新任务标题
- TodoItem — 只负责单条任务的展示，通过 onToggle 和 onDelete 回调通信
- TodoList — 组合上面两个，管理任务数组的状态
```

拆完之后比较前后的代码结构，理解单向数据流是怎么工作的。

## 第三步：加持久化

刷新页面后任务丢失，加上 localStorage：

```
给 TodoList 加 localStorage 持久化：
- 初始化时从 localStorage 读取任务列表，读取失败时用空数组
- 每次任务列表变化时自动保存
- 用 useEffect 处理这两个副作用
```

## 完整代码参考

```tsx
import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addTask()}
        placeholder="新任务..."
      />
      <button onClick={addTask}>添加</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

## 下一步

- [自动化测试实践](./automated-testing.md) — 给这些组件写测试
- [性能优化](./performance-optimization.md) — 组件渲染优化
