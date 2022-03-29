import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, computed } from 'vue'

export const useCounter = defineStore('counter', () => {
  const count = ref(1) //state
  const addCounter = () => (count.value += 1) //action
  const doubleCounter = computed(() => count.value * 2) //view
  return { count, addCounter, doubleCounter }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
