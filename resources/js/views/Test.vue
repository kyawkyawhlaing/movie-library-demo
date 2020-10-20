<template>
  <div>
    <form @submit.prevent="login" class="col-sm-4 offset-sm-4">
      <h1 class="text-center">Login Form</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control form-input"
          id="exampleInputEmail1"
          name="email"
          v-model="email"
          placeholder="Enter email"
        />
        <span><i class="fa fa-envelope"></i></span>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form-control form-input"
          id="exampleInputPassword1"
          placeholder="Password"
        />
        <span><i class="fa fa-lock"></i></span>
      </div>
      <button type="submit" class="btn btn-crimson">Login</button>
    </form>
  </div>
</template>

<script>
import store from '../store.js';
export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      store.email = this.email
      this.$router.push('/dashboard')
    }
  }
}
</script>