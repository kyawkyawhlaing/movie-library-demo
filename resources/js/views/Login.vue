<template>
  <div>
    <form @submit.prevent="login" class="col-sm-4 offset-sm-4">
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
        {{errors}}
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          name="email"
          v-model="email"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-crimson">Submit</button>
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
</style>>
