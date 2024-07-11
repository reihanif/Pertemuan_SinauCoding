<script setup>
    const props = defineProps({
        content: {
          type: Object,
        }
    })

    const emit = defineEmits(['showData'])

    function show(data) {
      emit('showData', data)
    }
</script>

<template>
  <tbody>
    <tr v-for="data in content" :key="data.id">
      <td>{{ data.id }}</td>
      <td>{{ data.nama }}</td>
      <td>{{ data.position }}</td>
      <td>{{ data.no_telp }}</td>
      <td>{{ data.email }}</td>
      <td><button class="btn" @click="show(data)">Show Data</button></td>
    </tr>
  </tbody>
</template>