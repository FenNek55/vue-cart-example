<template>
  <div class="product font-sans">
    <div v-if="justAdded" class="product__animation-overlay">
      <img class="product__animation-check" src="../assets/images/check.svg" alt="Check icon"/>
      <div>Dodano do koszyka</div>
    </div>
    <div class="product__image" :style="imageStyle">
    </div>
    <h2 class="product__brand">{{props.watchData.brand}}</h2>
    <h3 class="product__model">{{ props.watchData.name }}</h3>
    <div class="product__price">{{props.watchData.price}} PLN</div>
    <button @click="addToCart" class="product__button">Dodaj<img class="product__cart" src="../assets/images/cart.svg"/></button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useCartStore } from '../stores/cartStore'
import type { WatchData } from '../types'

const cartStore = useCartStore();

interface Props {
  watchData: WatchData
}

const props = defineProps<Props>()

const imageStyle = computed(() => {
  return {
    backgroundImage: `url(${props.watchData.image})`
  }
})

const playAddedAnimation = () => {
  justAdded.value = true;

  setTimeout(() => {
    justAdded.value = false
  }, 2000)
}

const addToCart = () => {
  cartStore.addToCart(props.watchData)
  playAddedAnimation();
}
const justAdded = ref(false)

</script>

<style lang="scss" scoped>
@keyframes added-to-cart {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes added-to-cart-contents {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }

  20% {
    opacity: 1;
    transform: translateY(0);
  }

  80% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-40px);
  }
}
.product {
  position: relative;
  padding: 20px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 12px;

  &__image {
    border: 1px solid rgb(231, 231, 231);
    margin-bottom: 12px;
    width: 100%;
    padding-top: 100%;
    background-size: cover;
    background-position: center center;
  }

  &__brand {
    font-size: 22px;
    margin-bottom: 4px;
    line-height: 18px;
    font-weight: 200;
  }

  &__model {
    font-size: 14px;
    margin-bottom: 8px;
  }

  &__price {
    margin-bottom: 20px;
  }

  &__button {
    display: flex;
    align-items: center;
    text-align: left;
    background-color: white;
    outline: none;
    border: 2px solid rgb(237, 237, 237);
    padding: 12px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
  }

  &__cart {
    width: 24px;
    margin-left: 8px;
    display: inline;
  }

  &__animation-overlay {
    animation: added-to-cart 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: green;
    font-weight: 900;
    font-size: 20px;

    & > * {
      animation: added-to-cart-contents 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    } 
  }

  &__animation-check {
    width: 50%;
  }
}
</style>