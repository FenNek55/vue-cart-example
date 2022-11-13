<template>
  <div class="item font-sans" :class="{'item--small': small}">
    <div class="item__left">
      <div class="item__image" :style="imageStyle"></div>
      <div class="item__info">
        <h2 class="item__brand">{{ watchData.brand}}</h2>
        <h3 class="item__model">{{ watchData.name }}</h3>
        <div class="item__price">{{props.watchData.price}} PLN</div>
        <div class="item__price-total">Łącznie: {{ watchData.price * quantinty }} PLN</div>
      </div>
    </div>
    <div class="item__right">
      <div class="item__quantity-box">
        <div>Ilość: {{quantinty}}</div>
        <div class="item__controls">
          <img @click="setQuantity(watchData, quantinty - 1)" src="@/assets/images/minus.svg"/>
          <img @click="addToCart(watchData)" src="@/assets/images/plus.svg"/>
        </div>
      </div>
      <img class="item__remove" @click="removeFromCart(watchData)" src="@/assets/images/trash.svg"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { WatchData } from '../types'
import { computed, ref, onMounted } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const { removeFromCart, addToCart, setQuantity } = useCartStore();

interface Props {
  watchData: WatchData,
  quantinty: number,
  small?: boolean
}

const props = defineProps<Props>()
const numberInputValue = ref<number>()

const imageStyle = computed(() => {
  return {
    backgroundImage: `url(${props.watchData.image})`
  }
})

onMounted(() => {
  numberInputValue.value = props.quantinty
})
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid rgb(234, 234, 234);
  margin-bottom: 20px;
  align-items: center;
  overflow-x: scroll;

  &--small {
    padding: 10px;

    & .item__image {
      width: 50px;
      height: 50px;
    }

    & .item__price {
      font-size: 12px;
    }

    & .item__price-total {
      font-size: 12px;
    }
  }

  &__left {
    display: flex;
  }

  &__right {
    align-items: center;
    display: flex;
    height: 100%;
  }

  &__image {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center center;
  }

  &__info {
    margin-left: 30px;
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

  &__number {
    display: inline-block;
    width: 100%;
    max-width: 100%;
  }

  &__remove {
    cursor: pointer;
    margin-left: 40px;
  }

  &__controls {
    display: flex;

    & > img {
      width: 32px;
      cursor: pointer;
    }
  }

  &__quantity-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  &__add, .disabled {
    opacity: 0.4;
    cursor: default;
  }
}
</style>
