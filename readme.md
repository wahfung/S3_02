# Vue3 + Cesium 项目

基于 Vue 3 + TypeScript + Pinia + Vue Router + Cesium 的三维GIS应用

## 技术栈

- Vue 3.5
- TypeScript 5.6
- Pinia 2.2
- Vue Router 4.4
- Cesium 1.123
- Vite 6.0

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
S3_01/
├── src/
│   ├── components/       # 组件
│   │   └── CesiumViewer.vue    # Cesium地图组件
│   ├── router/           # 路由
│   │   └── index.ts
│   ├── stores/           # Pinia状态管理
│   │   └── cesium.ts
│   ├── types/            # 类型定义
│   │   └── cesium.ts
│   ├── views/            # 页面视图
│   │   ├── HomeView.vue
│   │   ├── CesiumView.vue
│   │   ├── AboutView.vue
│   │   └── NotFoundView.vue
│   ├── App.vue
│   ├── main.ts
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 功能特性

- Vue 3 Composition API
- TypeScript 类型安全
- Pinia 状态管理 Cesium 实例
- Vue Router 路由管理
- Cesium 三维地球可视化
