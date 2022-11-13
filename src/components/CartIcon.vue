<template>
  <div class="cart-icon">
    <router-link class="cart-icon__link" to="/cart">
      <img src="../assets/images/cart.svg" alt="Cart icon"/>
      <div v-if="getNumberOfItems > 0" class="cart-icon__total">{{ getNumberOfItems }}</div>
    </router-link>
    <CartPopup class="cart-icon__popup"/>
  </div>
</template>

<script lang="ts" setup>
import CartPopup from './CartPopup.vue';
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

const store = useCartStore()
const { getNumberOfItems } = storeToRefs(store)
</script>

<style lang="scss" setup>
.cart-icon {
  position: relative;

  &__link {
    position: relative;
  }

  &__total {
    color: white;
    position: absolute;
    bottom: 0;
    left: -5px;
    width: 25px;
    height: 25px;
    text-align: center;
    border-radius: 999px;
    background-color: rgb(234, 37, 37);
    line-height: 18px;
  }

  &__popup {
    // display: none;
    pointer-events: none;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.2s;
  }

  &:hover .cart-icon__popup {
    // display: block;
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }
}
</style>