<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { useCesiumStore } from '@/stores/cesium'

const cesiumContainer = ref<HTMLDivElement | null>(null)
const cesiumStore = useCesiumStore()

onMounted(() => {
  if (cesiumContainer.value && !cesiumStore.isInitialized) {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1ZWFhNi0wYjM3LTQxMjctYmYzNC00ZjI5NTUyMDBlMjMiLCJpZCI6NTYwODUsImlhdCI6MTY5NjA0MjE3OH0.MmK0RXva9E8Z7aW3F9X7v3z9z9z9z9z9z9z9z9z9z9z'

    const viewer = new Cesium.Viewer(cesiumContainer.value, {
      terrain: Cesium.Terrain.fromWorldTerrain(),
      animation: false,
      timeline: false,
      baseLayerPicker: true,
      geocoder: true,
      homeButton: true,
      sceneModePicker: true,
      navigationHelpButton: true,
    })

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(116.4074, 39.9042, 10000000),
      duration: 2,
    })

    cesiumStore.setViewer(viewer)
  }
})

onUnmounted(() => {
  cesiumStore.destroyViewer()
})
</script>

<template>
  <div class="cesium-view">
    <div class="header">
      <h2>Cesium 3D 地球</h2>
      <router-link to="/" class="back-link">返回首页</router-link>
    </div>
    <div ref="cesiumContainer" class="cesium-container"></div>
  </div>
</template>

<style scoped>
.cesium-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #35495e;
  color: white;
}

.header h2 {
  margin: 0;
}

.back-link {
  color: #42b883;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #42b883;
  border-radius: 4px;
  transition: all 0.3s;
}

.back-link:hover {
  background: #42b883;
  color: white;
}

.cesium-container {
  flex: 1;
  width: 100%;
}
</style>
