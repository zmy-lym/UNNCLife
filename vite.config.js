import { defineConfig } from 'vite'
// React 官方插件:让 Vite 看得懂 JSX 语法(组件里的 <div> 那些标签)
import react from '@vitejs/plugin-react'
// Tailwind 的 Vite 插件：让 Vite 认识 Tailwind 的样式写法
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/UNNCLife/',
  // 插件按顺序执行：先让 React 处理组件，再让 Tailwind 处理样式
  plugins: [react(), tailwindcss()],
})
