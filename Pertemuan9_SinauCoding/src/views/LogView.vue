<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia'

const {cart, totalCart} = storeToRefs(useCartStore())
const {removeFromCart} = useCartStore();
</script>

<template>
  <main>
      <div class="header">
        <h1>This is an log page</h1>
        <p>Total items: {{ totalCart }}</p>
      </div>
      <div class="space-y">
        <p class="empty-label" v-if="totalCart == 0">There is nothing in your cart</p>
        <div class="card" v-else v-for="data in cart" :key="data.id">
          <p class="card-title">{{ data.title }}</p>
          <button @click="removeFromCart(data)">Remove</button>
        </div>
      </div>
  </main>
</template>

<style scoped>
.empty-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vt-c-white-soft);
}
</style>