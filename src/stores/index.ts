import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMainStore = defineStore('main', () => {
  const count = ref(0)
  const name = ref('Vue3 + Cesium App')

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return {
    count,
    name,
    doubleCount,
    increment,
    decrement,
  }
})
