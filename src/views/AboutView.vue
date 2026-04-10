<script setup lang="ts">
</script>

<template>
  <div class="about">
    <h1>关于项目</h1>
    <div class="content">
      <h2>技术栈</h2>
      <ul>
        <li><strong>Vue 3</strong> - 渐进式 JavaScript 框架</li>
        <li><strong>TypeScript</strong> - 类型安全的 JavaScript 超集</li>
        <li><strong>Pinia</strong> - Vue 的状态管理库</li>
        <li><strong>Vue Router</strong> - Vue 的官方路由管理器</li>
        <li><strong>Cesium</strong> - 开源 3D 地球和地图可视化库</li>
        <li><strong>Vite</strong> - 下一代前端构建工具</li>
      </ul>
      <h2>项目结构</h2>
      <pre>
src/
  components/   # 组件目录
  router/       # 路由配置
  stores/       # Pinia 状态管理
  views/        # 页面视图
  App.vue       # 根组件
  main.ts       # 入口文件
      </pre>
    </div>
    <router-link to="/" class="back-link">返回首页</router-link>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #42b883;
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  color: #35495e;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.content {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
}

li:last-child {
  border-bottom: none;
}

strong {
  color: #42b883;
}

pre {
  background: #2d2d2d;
  color: #ccc;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 0.9rem;
}

.back-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #35495e;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s;
}

.back-link:hover {
  background: #2c3e50;
}
</style>
