<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12" sm="6" md="6">
        <v-card width="600" height="auto" flat>
          <v-img
            src="./images/construction-illustration_11345-1.jpg"
            alt="Abstract vector created by pch.vector - www.freepik.com"
            contain
          ></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card class="mx-auto" width="300" flat>
          <div class="display-2 text-center">LOGIN</div>
          <p class="title text-center text--secondary">
            Welcome to The V-Catalogue
          </p>

          <v-form
            ref="form"
            id="login-form"
            lazy-validation
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              prepend-icon="mdi-email-outline"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              prepend-icon="mdi-lock"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn
            @click="login"
              color="success"
              class="mr-4"
              form="login-form"
              :loading="loader"
            >
              Login
            </v-btn>

          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import store from "../store.js";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      errors: null,
      show1: false,
      loader: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

    };
  },
  methods: {
    login() {
      this.$refs.form.validate();
      this.loader = true;
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            if (response.data.email == this.email) {
              store.email = response.data.email;
              this.loader = false;
              this.$router.push("/dashboard");
            } else {
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
</style>