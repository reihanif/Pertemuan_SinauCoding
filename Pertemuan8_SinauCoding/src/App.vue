<script setup>
import TableBody from "./components/TableBody.vue";
import TableHead from "./components/TableHead.vue";
import { reactive } from "vue";

import Header from "./assets/data/Header.json";
import User from "./assets/data/User.json";

const header = reactive(Header);
const user = reactive(User);

function showUser(value) {
  alert(header[0] + ' : ' + value.id
  + '\n' + header[1] + ' : ' + value.nama 
  + '\n' + header[2] + ' : ' + value.position
  + '\n' + header[3] + ' : ' + value.no_telp
  + '\n' + header[4] + ' : ' + value.email)
}
</script>

<template>
  <main>
    <table border="1">
      <TableHead :content="header" />
      <TableBody :content="user" @show-data="showUser"/>
    </table>
  </main>
</template>

<style scoped>
table {
  text-align: center;
}
</style>
