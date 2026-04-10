import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as Cesium from 'cesium'

export const useCesiumStore = defineStore('cesium', () => {
  const viewer = ref<Cesium.Viewer | null>(null)
  const isInitialized = ref(false)

  function setViewer(v: Cesium.Viewer) {
    viewer.value = v
    isInitialized.value = true
  }

  function destroyViewer() {
    if (viewer.value) {
      viewer.value.destroy()
      viewer.value = null
      isInitialized.value = false
    }
  }

  return {
    viewer,
    isInitialized,
    setViewer,
    destroyViewer,
  }
})
