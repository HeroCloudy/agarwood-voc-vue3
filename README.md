# Agarwood VOC Vue3

![Vue](https://img.shields.io/badge/Vue-3.5.22-4FC08D) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6) ![Vite](https://img.shields.io/badge/Vite-7.1-646CFF) ![Nuxt](https://img.shields.io/badge/Nuxt-4.1.3-00DC82) ![License](https://img.shields.io/badge/License-ISC-blue.svg)

**基于 Vue 3 + TypeScript + Nuxt 4 的智能问卷系统前端项目**

---

## 🎯 项目简介

**Agarwood VOC** 是一套完整的智能问卷系统，包含前后端两个独立项目：

- **前端项目**（本仓库）- 基于 Vue 3 + TypeScript + Nuxt 4，提供丰富的交互体验
  - 问卷编辑器（可视化拖拽设计）
  - 问卷门户（Nuxt 4 服务端渲染）
  - 问卷客户端（Nuxt 4 服务端渲染）
  - AI 聊天助手组件封装

- **后端项目** - 基于 Spring Boot 3 + Spring AI + Spring Security，提供强大的后端服务
  - 用户管理与权限控制
  - 问卷数据管理
  - 数据统计分析
  - AI 智能助手集成

👉 后端项目地址：[agarwood-voc-springboot](https://github.com/HeroCloudy/agarwood-voc-springboot)

📚 **配套教程**：后续将陆续在公众号（程序员优雅哥 youyacoder，二维码在文末）更新前后端从 0 开始开发本项目的完整系列文章，敬请期待！

> 💡 本套项目非常适合系统学习现代前端技术、Monorepo 架构、可视化编辑器、服务端渲染等核心技能

---

## ✨ 项目亮点

- 🎨 **Monorepo 架构** - 基于 pnpm workspace 的多包管理，代码复用率高
- 🧩 **组件化开发** - 独立的组件库（voc-components），支持按需引入
- 🎯 **可视化编辑器** - 拖拽式问卷设计，所见即所得
- 🤖 **AI 聊天助手** - 封装 AI 对话组件，支持复杂交互渲染
- 📊 **数据可视化** - ECharts 图表展示，丰富的统计功能
- 🚀 **高性能渲染** - Vue 3 + Vite + Nuxt 4，极致的开发体验
- ⚡ **Nuxt 4 服务端渲染** - 问卷门户和客户端采用 SSR，首屏加载快，SEO 友好
- 🎭 **微前端架构** - 使用 wujie 集成多个子应用
- 💅 **UnoCSS 原子化 CSS** - 按需生成样式，体积更小
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🔒 **TypeScript 全覆盖** - 完整的类型定义，提升代码质量

---

## 📖 功能特性

### 核心功能

#### 🎨 问卷编辑器（voc-editor）
- ✅ **可视化设计** - 拖拽式组件编辑，所见即所得
- ✅ **多种题型** - 支持单选、多选、填空、文本域、标题、说明等
- ✅ **组件属性配置** - 灵活的属性编辑面板
- ✅ **快捷操作** - 复制、删除、锁定、隐藏组件
- ✅ **撤销重做** - 基于 pinia-undo 的状态管理
- ✅ **实时预览** - 边编辑边预览
- ✅ **二维码生成** - 支持生成问卷分享二维码

#### 📊 统计分析（voc-editor）
- ✅ **数据概览** - 问卷总答卷数、完成率等
- ✅ **组件统计** - 每个组件的选项分布统计
- ✅ **图表展示** - ECharts 图表可视化
- ✅ **数据导出** - 支持数据导出功能

#### 🌐 问卷门户（voc-portal）
- ✅ **问卷广场** - 公开问卷展示
- ✅ **问卷搜索** - 支持关键词搜索
- ✅ **问卷分类** - 标签分类筛选
- ✅ **问卷复制** - 一键复制问卷模板
- ✅ **AI 助手** - 智能问答助手

#### 📝 问卷客户端（voc-client）
- ✅ **问卷填写** - 响应式问卷填写界面
- ✅ **表单验证** - 完整的表单验证规则
- ✅ **提交反馈** - 成功/失败页面展示
- ✅ **移动端适配** - 完美适配移动设备

#### 🤖 AI 助手（voc-ai）
- ✅ **流式对话** - 支持流式 AI 响应
- ✅ **Markdown 渲染** - 支持 Markdown 格式输出
- ✅ **上下文感知** - 携带用户登录状态
- ✅ **可复用组件** - 独立的 AI 组件库

#### 🧩 组件库（voc-components）
- ✅ **问卷组件** - 完整的问卷组件集合
- ✅ **统计组件** - 数据统计展示组件
- ✅ **图表组件** - ECharts 封装组件
- ✅ **工具组件** - 图标、选项编辑等工具组件

---

## 🛠 技术架构

### 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 3.5.22 | 渐进式 JavaScript 框架 |
| TypeScript | 5.9.0 | JavaScript 超集 |
| Vite | 7.1.12 | 新一代前端构建工具 |
| Nuxt | 4.1.3 | Vue 服务端渲染框架 |
| Element Plus | 2.11.4 | Vue 3 组件库 |
| Pinia | 3.0.3 | Vue 状态管理 |
| Vue Router | 4.5.1 | Vue 官方路由 |
| UnoCSS | 66.5.4 | 原子化 CSS 引擎 |
| ECharts | 6.0.0 | 数据可视化库 |
| VueUse | 14.0.0 | Vue 组合式工具集 |
| Axios | 1.12.2 | HTTP 客户端 |
| Draggable | 4.1.0 | 拖拽库 |
| pnpm | 10.20.0 | 包管理器 |
| wujie-vue3 | 1.0.29 | 微前端框架 |

### 架构设计

```
┌─────────────────────────────────────────────────────────┐
│                      用户层                              │
│         (Desktop / Mobile / Tablet)                     │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                    应用层 (Monorepo)                     │
├─────────────────────────────────────────────────────────┤
│  voc-portal    │  voc-editor  │  voc-client  │  voc-ai  │
│  (问卷门户)     │  (编辑器)     │  (客户端)     │ (AI助手)  │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                   组件层                                │
│              voc-components (组件库)                     │
│  (问卷组件 / 统计组件 / 图表组件 / 工具组件)            │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                   工具层                                 │
│  (HTTP 封装 / 工具函数 / 类型定义 / 样式变量)           │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                   后端 API                               │
│         (Spring Boot + Spring AI)                       │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 项目结构

```
agarwood-voc-vue3/
├── voc-editor/              # 问卷编辑器（Vue 3 + Vite）
│   ├── src/
│   │   ├── components/       # 组件
│   │   │   └── wm/
│   │   │       ├── editor/  # 编辑器组件
│   │   │       │   ├── main-canvas.vue      # 主画布
│   │   │       │   ├── left-panel.vue       # 左侧面板
│   │   │       │   ├── right-panel.vue      # 右侧面板
│   │   │       │   └── toolbar.vue          # 工具栏
│   │   │       └── stat/    # 统计组件
│   │   ├── pages/            # 页面
│   │   ├── stores/           # 状态管理
│   │   ├── hooks/            # 组合式函数
│   │   └── services/         # API 服务
│   └── package.json
├── voc-portal/              # 问卷门户（Nuxt 4）
│   ├── app/
│   │   ├── components/       # 组件
│   │   │   ├── home/         # 首页组件
│   │   │   ├── list/         # 列表组件
│   │   │   └── square/       # 广场组件
│   │   └── pages/            # 页面
│   └── package.json
├── voc-client/              # 问卷客户端（Nuxt 4）
│   ├── app/
│   │   ├── pages/            # 页面
│   │   │   ├── [id].vue      # 问卷填写
│   │   │   ├── success.vue   # 成功页面
│   │   │   └── failure.vue   # 失败页面
│   │   └── services/         # API 服务
│   └── package.json
├── voc-ai/                  # AI 助手（Vue 3 + Vite）
│   ├── src/
│   │   └── components/
│   │       └── wm/
│   │           └── ai/
│   │               └── chat/ # AI 对话组件
│   └── package.json
├── voc-components/          # 组件库（Vue 3 + Vite）
│   ├── src/
│   │   └── components/
│   │       └── wm/
│   │           └── voc/      # 问卷组件
│   │               ├── input/       # 输入框
│   │               ├── textarea/    # 文本域
│   │               ├── radio/        # 单选
│   │               ├── checkbox/     # 多选
│   │               ├── title/        # 标题
│   │               ├── info/         # 说明
│   │               └── paragraph/   # 段落
│   └── package.json
├── voc-mock/                # Mock 服务
├── package.json             # 根 package.json
├── pnpm-workspace.yaml      # pnpm workspace 配置
└── README.md
```

---

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm 10+

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/HeroCloudy/agarwood-voc-vue3.git
cd agarwood-voc-vue3
```

2. **安装依赖**

```bash
pnpm install
```

3. **启动开发服务器**

```bash
# 启动问卷编辑器
pnpm editor:dev

# 启动问卷门户
pnpm portal:dev

# 启动问卷客户端
pnpm client:dev

# 启动 AI 助手
pnpm ai:dev

# 启动组件库
pnpm components:dev
```

4. **访问应用**

- 问卷编辑器：http://localhost:8081
- 问卷门户：http://localhost:8080
- 问卷客户端：http://localhost:3000
- AI 助手：http://localhost:8082
- 组件库：http://localhost:8083

### 构建生产版本

```bash
# 构建问卷编辑器
pnpm editor:build

# 构建问卷门户
pnpm portal:build

# 构建问卷客户端
pnpm client:build

# 构建 AI 助手
pnpm ai:build

# 构建组件库
pnpm components:build
```

---

## 📚 开发指南

### 组件开发

#### 问卷组件

所有问卷组件都在 `voc-components` 包中，每个组件包含：

- `index.vue` - 组件实现
- `index.ts` - 组件导出
- `props.ts` - 组件属性定义
- `prop-form.vue` - 属性编辑表单
- `stat.vue` - 统计展示组件

#### 添加新组件

1. 在 `voc-components/src/components/wm/voc/` 下创建新组件目录
2. 实现组件文件
3. 在 `voc-components/src/components/wm/voc/types.ts` 中定义类型
4. 在 `voc-editor/src/utils/voc-component.ts` 中注册组件

### 状态管理

使用 Pinia 进行状态管理，主要 Store：

- `editor.ts` - 编辑器状态
- `voc.ts` - 问卷数据状态
- `core.ts` - 核心状态

### 样式开发

使用 UnoCSS 进行样式开发，配置文件：

- `uno.config.ts` - UnoCSS 配置
- `src/assets/scss/` - SCSS 样式文件

### API 请求

使用 Axios 封装 HTTP 请求：

```typescript
import { http } from '@/utils/http'

// GET 请求
const data = await http.get('/api/voc/survey/list')

// POST 请求
const result = await http.post('/api/voc/survey', surveyData)
```

---

## 🔧 配置说明

### 环境变量

在各个子项目的 `.env` 文件中配置：

```env
# API 地址
VITE_BASE_URL=/voc-api
VITE_BASE_URL_RMOTE=http://localhost:9001

# 其他配置
...
```

### Vite 配置

编辑器的 Vite 配置：

- `vite.config.ts` - Vite 配置文件
- 支持自动导入
- 支持组件自动注册
- 支持路由自动生成

### Nuxt 配置

门户和客户端的 Nuxt 配置：

- `nuxt.config.ts` - Nuxt 配置文件
- 支持服务端渲染（SSR）
- 支持代理配置

---

## 📊 核心功能实现

### 拖拽编辑器

使用 vuedraggable 实现拖拽功能：

```vue
<draggable
  v-model="componentList"
  item-key="frontId"
  animation="300"
>
  <template #item="{ element: item }">
    <div class="component-wrapper">
      <component :is="getComponent(item.type)" v-bind="item.props" />
    </div>
  </template>
</draggable>
```

### AI 对话组件

集成 AI 流式对话：

```vue
<template>
  <div class="ai-chat">
    <div class="messages">
      <div v-for="msg in messages" :key="msg.id">
        <div v-html="renderMarkdown(msg.content)"></div>
      </div>
    </div>
    <div class="input">
      <input v-model="input" @keyup.enter="send" />
    </div>
  </div>
</template>
```

### 数据可视化

使用 ECharts 展示统计数据：

```vue
<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script setup>
import * as echarts from 'echarts'

const chartRef = ref()
const chart = echarts.init(chartRef.value)

chart.setOption({
  series: [{
    type: 'bar',
    data: chartData
  }]
})
</script>
```

---

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

### 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 遵循 Vue 3 组合式 API 最佳实践
- 使用 TypeScript 进行类型定义

---

## 📄 开源协议

本项目采用 [ISC License](LICENSE) 开源协议。

---

## 🙏 致谢

感谢以下开源项目：

- [Vue](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Nuxt](https://nuxt.com/)
- [Element Plus](https://element-plus.org/)
- [UnoCSS](https://unocss.dev/)
- [ECharts](https://echarts.apache.org/)
- [Pinia](https://pinia.vuejs.org/)
- [VueUse](https://vueuse.org/)

---

**如果这个项目对你有帮助，请给个 ⭐️ Star 支持一下！**

Made with ❤️ by 程序员优雅哥（youyacoder）

***程序员优雅哥***

十年程序员，呆过央企外企私企，做过前端后端架构，分享vue、Java等前后端技术和架构

在公众号上随时更新前后端技术文章及企业级实战项目。可关注公众号程序员优雅哥查看。

与时间赛跑，每天都在进步！！









