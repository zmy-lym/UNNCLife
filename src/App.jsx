import { useState } from 'react'

// App 是整个应用的根组件。
// 阶段 2 第一个真功能:新增任务 + 显示任务列表。
function App() {
  // ── 两块"React 替我们记住的数据" ──────────────────────────────
  // tasks:任务清单(数组)。每条任务是一个对象:
  //   { id: 唯一编号, text: 任务内容, done: 是否完成 }
  // 界面是这个数组的"影子":想改界面,只改这个数组,React 自动重新渲染。
  const [tasks, setTasks] = useState([])

  // newTaskText:输入框当前的内容。
  // 这种"值和修改权都交给 React 管"的输入框,叫"受控表单"。
  const [newTaskText, setNewTaskText] = useState('')

  // ── 事件处理:用户提交表单时执行 ────────────────────────────────
  function handleAddTask(event) {
    // 浏览器默认行为是"提交表单就刷新整个页面",
    // 我们要用 JavaScript 局部更新,所以先拦住它。
    event.preventDefault()

    // trim() 去掉首尾空格;如果只剩空串,说明用户没输入内容,直接不添加
    const text = newTaskText.trim()
    if (!text) return

    // 造一条新任务。id 必须唯一,React 列表靠它认人;
    // crypto.randomUUID() 是浏览器自带的"随机唯一编号"生成器
    const newTask = {
      id: crypto.randomUUID(),
      text,
      done: false, // 刚添加的任务当然还没完成
    }

    // 关键一步:不修改旧数组,而是"复制旧数组 + 追加新任务"造一个新数组。
    // [...tasks, newTask] 读作"把 tasks 里的每一项摊开,后面再补上 newTask"。
    // (React 靠"这是不是一个新数组"来判断要不要刷新界面)
    setTasks([...tasks, newTask])

    // 添加完清空输入框,方便继续输入下一条
    setNewTaskText('')
  }

  // ── 界面 ──────────────────────────────────────────────────────
  return (
    // min-h-screen:占满全屏 / flex flex-col:内容纵向排 / items-center:水平居中
    <div className="min-h-screen flex flex-col items-center bg-slate-900 px-4 py-10 text-white">
      {/* 页头 */}
      <h1 className="text-4xl font-bold">UNNCLife</h1>
      <p className="mt-1 text-slate-300">大学生活管理 · 我的任务</p>

      {/* 新增任务表单:点击"添加"或按回车都会触发 onSubmit */}
      <form onSubmit={handleAddTask} className="mt-8 flex w-full max-w-md gap-2">
        <input
          type="text"
          value={newTaskText} /* 输入框显示什么,由 React 数据决定 */
          onChange={(event) =>
            setNewTaskText(event.target.value) /* 用户每敲一个字,就把新内容存回 React */
          }
          placeholder="输入任务,例如:完成高数作业"
          className="flex-1 rounded-lg bg-slate-800 px-4 py-2 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500 active:scale-95"
        >
          添加
        </button>
      </form>

      {/* 任务列表区域。
          三元表达式 a ? b : c 是 JavaScript 的"如果…否则…"写法 */}
      {tasks.length === 0 ? (
        // 数组为空:显示一句提示,而不是一块空白
        <p className="mt-8 text-slate-500">还没有任务,添加一条试试吧</p>
      ) : (
        // 数组有内容:用 .map() 把每条任务"翻译"成一个 <li>
        <ul className="mt-6 w-full max-w-md space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id} /* key 帮 React 认人:新增/删除时它才知道是谁来了谁走了 */
              className="flex items-center gap-3 rounded-lg bg-slate-800 px-4 py-3"
            >
              <span className="flex-1">{task.text}</span>
              {/* 完成按钮和删除按钮是下一小步的内容 */}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
