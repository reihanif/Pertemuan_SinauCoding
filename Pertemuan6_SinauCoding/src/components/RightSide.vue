<template>
  <div class="right-side">
    <div class="content">
      <div class="header">
        <img src="../../src/assets/logo-twitter.svg" alt="Twitter Logo" />
        <div class="cta">
          Don't have an account?
          <a class="sign-up" href="#" target="_blank" rel="noopener noreferrer"
            >Sign Up</a
          >
        </div>
      </div>
      <form action="#" method="post" class="form">
        <h1>Log in to Twitter</h1>
        <p class="form-title">Enter Twitter Account</p>
        <input
          name="username"
          type="text"
          placeholder="Phone, email or username"
        />
        <input name="password" type="password" placeholder="Password" />
        <div class="forgot-password">
          <a href="#" target="_blank" rel="noopener noreferrer"
            >Forgot password?</a
          >
        </div>
        <button type="submit" class="btn-sign-in">Sign in</button>
        <p class="sign-in-divider">or</p>
        <div class="social">
          <button type="button" class="btn-google">
            <img src="../../src/assets/logo-google.svg" alt="Logo Google" />Sign
            in with Google
          </button>
          <button type="button" class="btn-apple">
            <img src="../../src/assets/logo-apple.svg" alt="Logo Apple" />Sign
            in with Apple
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.right-side {
  width: 50%;
  padding: 40px 100px;
  background-color: #ffffff;
  box-sizing: border-box;
}

.right-side .content {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-side h1 {
  color: black;
  margin: 40px 0;
}

.right-side .header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.right-side .sign-up {
  color: #1e9cf1;
  font-weight: 800;
}

.right-side .form .form-title {
  color: #757575;
  font-size: larger;
  font-weight: 600;
  margin-bottom: 12px;
}

.right-side .form input {
  display: block;
}

.right-side .form .forgot-password {
  text-align: right;
  color: black;
  margin-bottom: 12px;
}

.right-side .form .sign-in-divider {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.right-side .form .social {
  display: flex;
  gap: 4px;
}

.btn-sign-in {
  background-color: #1e9cf1;
  color: #ffffff;
  padding: 20px;
}

.btn-apple,
.btn-google {
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.btn-apple {
  background-color: #191d23;
  color: #ffffff;
}

input {
  display: block;
  width: 100%;
  background-color: #eeeeee;
  border: none;
  border-radius: 4px;
  padding: 20px 20px;
  font: inherit;
  box-sizing: border-box;
  margin-bottom: 12px;
}

input:focus {
  outline: none;
}
</style>