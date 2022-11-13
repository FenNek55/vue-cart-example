<template>
  <div class="home">
      <SideNavigation></SideNavigation>
      <main class="home__content">
        <h1 class="home__greeting">Witaj w naszym sklepie!</h1>
        <section class="home__grid">
          <ProductPreview v-for="watch in filteredWatches" :key="watch.name" :watch-data="watch"/>
        </section>
      </main>
  </div> 
</template>

<script lang="ts" setup>
import SideNavigation from '@/components/SideNavigation.vue'
import ProductPreview from '@/components/ProductPreview.vue'
import { useMainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia';

const store = useMainStore()
const { filteredWatches } =  storeToRefs(store)
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.home {
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 70px;
  padding: 60px 40px 0 40px;

  @media(min-width: $breakpoint-md) {
    grid-template-columns: 150px 1fr;
  }

  @media(min-width: $breakpoint-lg) {
    grid-template-columns: 200px 1fr;
  }

  &__greeting {
    font-size: 42px;
    font-weight: 200;
    margin-bottom: 20px;
  }

  &__grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 20px;

    @media(min-width: $breakpoint-md) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: $breakpoint-lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>