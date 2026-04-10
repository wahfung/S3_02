import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    assetsInlineLimit: 0,
    commonjsOptions: {
      transformMixedEsModules: true,
      strictRequires: true,
    },
  },
  optimizeDeps: {
    // 方案一：一劳永逸，让 Vite 自动处理 cesium 及其所有依赖
    // 第一次启动稍慢，但后续有缓存就快了，推荐这个方案
  },
})
