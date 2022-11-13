<template>
  <main class="cart">
    <h1 class="cart__heading">Twój koszyk</h1>
    <CartItem :quantinty="cartEntry.quantity" :watch-data="cartEntry.watchData" v-for="(cartEntry, i) in cart" :key="i" :index="i"/>
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
.cart {
  max-width: 1600px;
  margin: 0 auto;
  padding: 60px 40px 60px 40px;

  &__heading {
    font-size: 42px;
    font-weight: 200;
    margin-bottom: 20px;
  }

  &__total {
    font-size: 22px;

    & > span {
      font-weight: 600;
    }
  }
}

</style>