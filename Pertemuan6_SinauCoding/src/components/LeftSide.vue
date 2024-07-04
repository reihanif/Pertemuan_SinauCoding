<template>
  <div class="left-side">
    <div class="content">
      <h1>Welcome to Twitter</h1>
      <h2>Happening now, join twitter today</h2>
      <img src="../../src/assets/illustrator.svg" alt="illustrator" />
    </div>
    <p class="copyright">&copy; 2022 Twitter, Inc</p>
  </div>
</template>

<style scoped>
.left-side {
  width: 50%;
  height: 100%;
  padding: 40px 100px;
  background-color: #1e9cf1;
  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.left-side .content {
  margin-top: 100px;
}

.left-side img {
  width: 400px;
  height: 400px;
}

.left-side h1 {
  margin: 12px 0;
}

.left-side h2 {
  font-size: larger;
  font-weight: 600;
}
</style>