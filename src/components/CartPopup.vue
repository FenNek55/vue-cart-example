<template>
  <main class="cart">
    <h1 class="cart__heading">Twój koszyk</h1>
    <CartItem small :quantinty="cartEntry.quantity" :watch-data="cartEntry.watchData" v-for="(cartEntry, i) in cart" :key="i" :index="i"/>
    <h2 v-if="cart.length === 0">Brak artykułów w koszyku</h2>
    <div class="cart__total">Łączna wartość: <span>{{getTotalPrice}} PLN</span></div>
  </main>
</template>

<script lang="ts" setup>
import CartItem from '@/components/CartItem.vue';
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { cart, getTotalPrice } = storeToRefs(cartStore)
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
.cart {
  border-radius: 8px;
  position: absolute;
  width: calc(100vw - 80px);
  height: 500px;
  top: 100%;
  right: 0;
  background-color: white;
  padding: 20px;
  border: 2px solid gray;
  z-index: 9999;
  overflow-y: scroll;

  @media(min-width: $breakpoint-lg) {
    width: 600px;
  }

  &__total {
    & > span {
      font-weight: 600;
    }
  }
}

</style>