<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia'

const {product, totalCart} = storeToRefs(useCartStore())
const {addToCart} = useCartStore();
</script>

<template>
  <main>
      <div class="header">
        <h1>This is the Chart View page</h1>
        <p class="sub-title">Items for sale</p>
        <p>Total items: {{ totalCart }}</p>
      </div>
      <div class="space-y">
        <div class="card" v-for="data in product" :key="data.id">
          <p class="card-title">{{ data.title }}</p>
          <button @click="addToCart(data)">Add</button>
        </div>
      </div>
  </main>
</template>