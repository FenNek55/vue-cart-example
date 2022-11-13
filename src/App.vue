<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import { useMainStore } from './stores/mainStore'
import { useCartStore } from './stores/cartStore';

onMounted(() => {
  const { loadMockData } = useMainStore()
  const {getDataFromLocalStorage} = useCartStore()

  loadMockData()
  getDataFromLocalStorage()
})
</script>

<template>
  <TheHeader/>
  <RouterView />
</template>
