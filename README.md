# UNNCLife

一个大学生活管理网页应用（纯前端第一版）：任务管理 + 课程表。
技术栈：React + Vite + Tailwind CSS + localStorage，部署在 GitHub Pages。

## 文件夹导览（阶段 0 版）

| 文件 / 文件夹 | 作用 | 你会常改吗 |
| --- | --- | --- |
| `index.html` | 网页"外壳"。React 组件会被装进 `<div id="root">` 里 | 偶尔（如改标题） |
| `src/main.jsx` | 总入口：把 React"装进"网页 | 几乎不改 |
| `src/App.jsx` | 根组件：页面内容的起点 | ★ 经常改 |
| `src/index.css` | 全局样式（阶段 2 会换成 Tailwind） | 阶段 2 会动 |
| `src/App.css` | 模板自带的样式，以后可删 | 待清理 |
| `public/` | 原样复制的静态文件（如图标） | 偶尔放图片 |
| `package.json` | 项目清单：名字、依赖、可用命令 | 偶尔看 |
| `vite.config.js` | Vite 配置（部署 GitHub Pages 时要改） | 阶段 1 会动 |
| `node_modules/` | 下载的依赖代码，git 不存档 | ✋ 不要手动改 |
| `.gitignore` | 告诉 git 哪些文件不存档 | 很少改 |
| `.npmrc` | npm 配置：缓存位置 + 国内镜像源 | 网络正常时可删镜像行 |
| `.gitattributes` | 统一不同系统的换行符 | 不改 |
| `.oxlintrc.json` | 代码检查工具配置（`npm run lint` 用） | 不改 |

## 常用命令

```bash
npm run dev      # 启动开发服务器（写代码时用）
npm run build    # 打包出发布版（部署前用）
npm run preview  # 本地预览打包结果
npm run lint     # 代码体检：找出低级错误和不规范写法
```

## 里程碑

- [x] 阶段 0：项目创建、能跑、git 初始化
- [ ] 阶段 1：部署到 GitHub Pages
- [ ] 阶段 2：任务管理（新增 / 完成 / 删除）
- [ ] 阶段 3：localStorage 数据保存
- [ ] 阶段 4：任务编辑与筛选
- [ ] 阶段 5：课程表
- [ ] 阶段 6：首页汇总
- [ ] 阶段 7：收尾与最终部署
