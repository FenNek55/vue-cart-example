import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import mockData from './mockData.json'
import type { WatchData } from '../types'

export const useMainStore = defineStore('main', () => {
  const brands = ref()
  const watches = ref<WatchData[]>([])
  const currentBrand = ref<string>('')

  const loadMockData = () => {
    brands.value = mockData.brands
    watches.value = mockData.watches
  }

  const filteredWatches = computed(() => {
    if(currentBrand.value === '') {
      return watches.value
    }
    
    return watches.value.filter(watch => {
      return watch.brand === currentBrand.value
    })
  })

  const updateCurrentBrand = (brand: string) => {
    currentBrand.value = brand
  }

  return { watches, updateCurrentBrand, filteredWatches, brands, loadMockData, currentBrand }
})
