<template>
  <div>
    <form @submit.prevent="login" class="col-sm-4 offset-sm-4">
      <h1 class="text-center">Login Form</h1>
      <div v-if="errors !== 'Could not login.'">
        <div
          class="alert alert-danger"
          v-for="error in errors"
          :key="error"
          role="alert"
        >
          {{ error[0] }}
        </div>
      </div>
      <div class="alert alert-danger" v-show="errors == 'Could not login.'">
        {{ errors }}
      </div>
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
import Axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
      errors: null,
    };
  },
  methods: {
    login() {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            if (response.data.email == this.email)
              this.$router.push({ name: "Dashboard" });
            else {
              return (this.errors = response.data.status);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      });
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 10%;
  margin-bottom: 10%;
}
.btn-crimson {
  background-color: crimson;
  color: white;
}
span {
  position: relative;
  top: -30px;
  left: 3px;
}
</style>>
