<script setup>
    const props = defineProps({
        content: {
          type: Object,
        }
    })
</script>

<template>
    <thead>
        <tr>
          <th v-for="(data, index) in content" :key="index">{{ data }}</th>
        </tr>
    </thead>
</template>

<style scoped>
th {
    color: white;
    font-weight: 700;
}
</style>