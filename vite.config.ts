import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// Cesium 相关的 CommonJS 依赖列表（来自 @cesium/engine 的依赖）
const cesiumCommonJSDeps = [
  '@tweenjs/tween.js',
  'autolinker',
  'bitmap-sdf',
  'dompurify',
  'earcut',
  'grapheme-splitter',
  'jsep',
  'kdbush',
  'ktx-parse',
  'lerc',
  'mersenne-twister',
  'pako',
  'rbush',
  'topojson-client',
  'urijs',
]

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
  },
  optimizeDeps: {
    exclude: ['cesium'],
    include: cesiumCommonJSDeps,
  },
})
