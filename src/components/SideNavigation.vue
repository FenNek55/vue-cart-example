<template>
  <aside class="sidenav">
    <h1 class="sidenav__header">Filtry</h1>
    <section class="sidenav__section">
      <h2 class="sidenav__section-header">Marki</h2>
      <form class="sidenav__brand-form">
        <div v-for="(brand, i) in brands" :key="i" class="sidenav__radio-wrapper">
          <input @input="updateCurrentBrand(brand)" class="sidenav__radio" name="brand"  type="radio" :value="brand" :id="brand"/>
          <label class="sidenav__label" :for="brand">{{brand}}</label>
        </div>
        <div class="sidenav__radio-wrapper">
          <input checked @input="updateCurrentBrand('')" class="sidenav__radio" name="brand"  type="radio" :value="''" id="empty"/>
          <label class="sidenav__label" for="empty">Wszystkie</label>
        </div>
      </form>
    </section>
  </aside>
</template>

<script lang="ts" setup>
import {useMainStore} from '@/stores/mainStore'
import { storeToRefs } from 'pinia'

const store = useMainStore()
const { brands } = storeToRefs(store)
const { updateCurrentBrand } = store
</script>

<style lang="scss" scoped>
.sidenav {
  &__header {
    font-size: 32px;
    margin-bottom: 32px;
  }

  &__section {
    padding-top: 20px;
    border-top: 1px solid rgb(233, 233, 233);
  }

  &__section-header {
    margin-bottom: 6px;
  }

  &__label {
    margin-left: 8px;
  }
}
</style>