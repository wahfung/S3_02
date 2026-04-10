<script setup lang="ts">
import { useMainStore } from '@/stores'

const mainStore = useMainStore()
</script>

<template>
  <div class="home">
    <h1>{{ mainStore.name }}</h1>
    <p>这是一个 Vue3 + TypeScript + Pinia + Vue Router + Cesium 项目</p>
    <div class="counter">
      <p>Count: {{ mainStore.count }}</p>
      <p>Double Count: {{ mainStore.doubleCount }}</p>
      <div class="buttons">
        <button @click="mainStore.decrement">-</button>
        <button @click="mainStore.increment">+</button>
      </div>
    </div>
    <div class="links">
      <router-link to="/cesium" class="link">查看 Cesium 示例</router-link>
      <router-link to="/about" class="link">关于</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #42b883;
  margin-bottom: 1rem;
}

.counter {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 8px;
  display: inline-block;
}

.buttons {
  margin-top: 1rem;
}

button {
  margin: 0 0.5rem;
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #3aa876;
}

.links {
  margin-top: 2rem;
}

.link {
  display: inline-block;
  margin: 0 1rem;
  padding: 0.75rem 1.5rem;
  background: #35495e;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s;
}

.link:hover {
  background: #2c3e50;
}
</style>
