import { useState } from 'react'

// App 是整个应用的根组件。
// 阶段 2 起我们在这里搭页面；下面的计数器是用来验收
// Tailwind 是否正常工作的临时示例，之后会被替换掉。
function App() {
  // useState:让 React 记住一个会变化的值。
  // count 是当前值,setCount 是修改它的唯一合法方式。
  const [count, setCount] = useState(0)

  return (
    // min-h-screen:占满整个屏幕高度 / flex flex-col:内容纵向排列
    // items-center:水平居中 / justify-center:垂直居中
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-900 text-white">
      {/* UNNCLife 的第一块招牌 */}
      <h1 className="text-4xl font-bold">UNNCLife</h1>
      <p className="text-slate-300">大学生活管理 · 第一个功能开发中</p>

      {/* Tailwind 验收按钮:点击数字加 1。
          如果点击有反应且按钮是圆角蓝色,说明 React 和 Tailwind 都正常 */}
      <button
        type="button"
        onClick={() => setCount((count) => count + 1)}
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500 active:scale-95"
      >
        Tailwind 验收按钮 · 点了 {count} 次
      </button>
    </div>
  )
}

export default App
