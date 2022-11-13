import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { WatchData, CartData } from '../types'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartData[]>([])
  const getCartIndex = (watchData: WatchData) => {
    return cart.value.findIndex((cartData) => {return cartData.watchData.id === watchData.id})
  }

  const addToCart = (watchData: WatchData) => {
    const cartIndex = getCartIndex(watchData)

    if (cartIndex === -1) {
      cart.value.push({
        watchData,
        quantity: 1
      })
    } else {
      cart.value[cartIndex].quantity += 1;
    }

    localStorage.setItem("watchCart", JSON.stringify(cart.value))
  }

  const removeFromCart = (watchData: WatchData) => {
    const cartIndex = getCartIndex(watchData)
    cart.value.splice(cartIndex, 1)

    localStorage.setItem("watchCart", JSON.stringify(cart.value))
  }

  const setQuantity = (watchData: WatchData, quantity: number) => {
    if (quantity < 1) {
      return
    }

    const cartIndex = getCartIndex(watchData)

    cart.value[cartIndex].quantity = quantity
    localStorage.setItem("watchCart", JSON.stringify(cart.value))
  }

  const getDataFromLocalStorage = () => {
    const cartLocal = localStorage.getItem("watchCart")

    if (cartLocal) {
      cart.value = JSON.parse(cartLocal)
    }
  }

  const getNumberOfItems = computed(() => {
    if (cart.value.length === 0) {
      return 0
    }

    let total = 0
    cart.value.forEach((item) => {
      total += item.quantity
    })

    return total
  })

  const getTotalPrice = computed(() => {
    if (cart.value.length === 0) {
      return 0
    }

    let total = 0
    cart.value.forEach((item) => {
      total += item.watchData.price * item.quantity
    })

    return total
  })

  return { removeFromCart, cart, addToCart, getDataFromLocalStorage, setQuantity, getNumberOfItems, getTotalPrice }
})
