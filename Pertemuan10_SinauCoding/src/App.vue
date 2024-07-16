<script>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

export default {
  setup() {
    const post = reactive([])
    const author = reactive([])

    onMounted(() => {
      getPost()
      getAuthor()

      console.log(author)
    })
    
    async function getPost() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      post.push(...response.data.slice(0, 3))
    }

    async function getAuthor() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      author.push(...response.data.slice(0, 5))
    }

    return {post, author}
  }
}
</script>

<template>
  <main>
    <div class="header">
      <h1>Post</h1>
    </div>
    <div class="space-y">
      <div class="card" v-for="data in post" :key="data.id">
        <p class="card-title">{{ data.title }}</p>
        <p>
          {{ data.body }}
        </p>
      </div>
    </div>
    <div class="header">
      <h1>Author</h1>
    </div>
    <div class="author">
      <div class="card" v-for="data in author" :key="data.id">
        <p class="card-title">{{ data.name }}</p>
        <p>{{ data.username }}</p>
        <p>{{ data.email }}</p>
      </div>
    </div>
  </main>
</template>
