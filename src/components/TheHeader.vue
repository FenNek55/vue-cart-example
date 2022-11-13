<template>
  <header class="header">
    <router-link to="/" class="header__link"><h1 class="header__title">ZegarkowySklep.pl</h1></router-link>
    <CartIcon/>
  </header>
</template>

<script lang="ts" setup>
import CartIcon from './CartIcon.vue';
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 40px;
  background-color: wheat;
  display: flex;
  justify-content: space-between;

  &__title {
    font-size: 28px;
    font-weight: 700;
    color: black;
  }

  &__link {
    text-decoration: none;
  }
}
</style>