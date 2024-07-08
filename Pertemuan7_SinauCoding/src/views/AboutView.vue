<script setup>

</script>

<template>
  <div class="about">
    <div class="card">
      <h1>Payment</h1>
      <div class="content">
      <p>
        Total pembayaran yang harus dibayarkan oleh {{ this.$route.query.customer }} dari {{ this.$route.query.qty }} items
        sebesar
      </p>
      <p>Rp. {{ this.$route.query.total }},00</p>
      </div>
      <routerLink to="/" class="btn">Back</routerLink>
    </div>
  </div>
</template>

<style>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.card {
  padding: 28px;
  text-align: center;
  border: 2px solid;
  border-color: white;
  border-radius: 8px;
}

.content {
  margin: 0 0 28px 0;
}
</style>
