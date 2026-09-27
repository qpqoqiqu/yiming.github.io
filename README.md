# 内森·斯特林 - 网页开发者作品集

> 网页开发者 · 设计师 · 专注打造现代、响应式且用户友好的网页体验

## 🌐 在线访问

本作品集部署在 Vercel CDN，**推荐访问地址**：

👉 **https://yiming-github-io.vercel.app**

## ✨ 项目特点

- 🎨 **现代响应式设计**：适配桌面 / 平板 / 手机三端
- ⚡ **静态导出**：使用 Next.js 15 + `output: 'export'` 配置，构建产物为纯静态文件，加载快
- 🇨🇳 **全中文本地化**：页面文案、导航、按钮、客户推荐语全部中文
- 🛠️ **技术栈**：
  - Next.js 15.5.18（App Router）
  - React 19 + TypeScript
  - Tailwind CSS 3.4
  - shadcn/ui（53 个组件）
  - framer-motion（动效）

## 📦 项目结构

```
.
├── app/                # Next.js App Router 入口
│   ├── components/     # 页面区块组件（Hero / About / Projects 等）
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 首页
├── components/
│   ├── ui/             # shadcn/ui 原子组件库
│   └── theme-provider.tsx
├── hooks/              # 自定义 React Hooks
├── lib/                # 工具函数
├── public/
│   └── images/         # 本地化的项目配图
├── styles/             # Tailwind 全局配置
├── next.config.mjs     # Next.js 配置（含静态导出开关）
├── tailwind.config.js  # Tailwind 配置
└── package.json
```

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:3000）
npm run dev

# 构建静态站点（产物在 ./out/）
npm run build
```

## 🔄 部署流程

本项目通过 **GitHub → Vercel** 实现自动部署：

1. 修改代码 → `git push` 到 `main` 分支
2. Vercel 自动检测 push 并触发构建
3. 1-2 分钟内新版本上线，无需手动操作

## 📝 更新日志

### v0.1.0 (2026-09-26)
- 项目初始化（基于 nathan-sterling-portfolio 模板）
- 全英文界面翻译为中文
- 远程图片本地化（hero.png、project-1~3.png）
- 配置静态导出（`next.config.mjs`）
- 修复 npmmirror 镜像源导致的 lockfile 嵌套平台包版本缺失问题

---

Made with ❤️ using Next.js + Vercel