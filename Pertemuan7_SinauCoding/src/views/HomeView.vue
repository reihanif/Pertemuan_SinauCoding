<script setup>
import { ref, reactive, computed, watch } from "vue";
import { useRoute, useRouter } from 'vue-router';

const customer = ref("");
const ingredient = ref("");
const amount = ref("");
const price = ref("");

const items = reactive([]);
const totalAmount = ref(0);
const totalPrice = ref(0);

const router = useRouter()

function about() {
  if(customer.value !== '') {
    router.push({
      name: "about",
      query: {
        total: totalPrice.value,
        qty: totalAmount.value,
        customer: customer.value
      }
    })
  } else {
    alert('Please field in customer name')
  }
}

function create() {
  if(hasValidInput()) {
    const newData = {
      ingredient: `${ingredient.value}`,
      amount: `${amount.value}`,
      price: `${price.value}`,
      total: `${amount.value}` * `${price.value}`,
    };
    totalAmount.value += parseInt(newData.amount)
    totalPrice.value += newData.total
  
    items.push(newData);
    ingredient.value = "";
    amount.value = "";
    price.value = "";
  }
}

function remove(index) {
  items.splice(index, 1);
}

function hasValidInput() {
  return ingredient.value.length !== 0 && amount.value.length !== 0 && price.value.length !== 0
}
</script>

<template>
  <main>
    <h1>List Ingredient</h1>
    <div>
      <div class="customer">
        <label for="customer">Customer</label>
        <br />
        <input type="text" id="customer" name="customer" v-model="customer" />
      </div>
      <div>
        <div>
          <span class="input-field">
            <label for="ingredient">Ingredient </label>
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              v-model="ingredient"
            />
          </span>
          <span class="input-field">
            <label for="amount">Amount </label>
            <input type="number" name="amount" id="amount" v-model="amount" />
          </span>
          <span class="input-field">
            <label for="price">Price </label>
            <input type="number" name="price" id="price" v-model="price" />
          </span>
          <button @click="create">Submit</button>
        </div>
        <table class="table" border="1">
          <thead>
            <tr>
              <th>No</th>
              <th>Ingredient</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="items.length == 0">
            <tr>
              <td colspan="6">Data empty</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.ingredient }}</td>
              <td>Rp. {{ item.price }},00</td>
              <td>{{ item.amount }}</td>
              <td>Rp. {{ item.total }},00</td>
              <td><button @click="remove(index)">Delete</button></td>
            </tr>
            <tr v-if="items.length > 1">
              <td colspan="3">Total</td>
              <td>{{ totalAmount }}</td>
              <td>Rp. {{ totalPrice }},00</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="total-data">Total Data: {{ items.length }}</div>
        <button type="submit" @click="about">Cetak Tagihan</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  text-align: center;
}

table th {
  color: white;
  font-weight: 600;
}

.customer {
  margin-bottom: 8px;
}

.input-field {
  margin-right: 10px;
}

.table {
  width: 100%;
  margin: 16px 0 0 0;
}

.total-data {
  margin: 8px 0;
}
</style>