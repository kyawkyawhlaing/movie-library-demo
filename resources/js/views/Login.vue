<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="6" class="hidden-md-and-down">
        <v-card width="600" height="auto" flat>
          <v-img
            class="hidden-md-and-down"
            src="./images/4022196.jpg"
            alt="Abstract vector created by pch.vector - www.freepik.com"
            contain
          ></v-img>
        </v-card>
      </v-col>
      <v-col class="my-auto" cols="12" sm="6" md="6">
        <v-alert v-if="error"  type="error" dense text>{{error}}</v-alert>
        <v-card class="mx-auto" width="300" flat>
          <div class="display-2 text-center">LOGIN</div>
          <p class="title text-center text--secondary">
            Welcome to The V-Catalogue
          </p>

          <v-form ref="form" id="login-form" lazy-validation>
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
              color="light-blue darken-3"
              class="my-5 mx-5 white--text"
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

export default {
  name: "login",
  data() {
    return {
      email: "user@email.com",
      password: "password",
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
  computed: {
    error() {
      return this.$store.state.login.error;
    },
  },
  methods: {
    login() {
      this.$refs.form.validate();
      this.loader = true;
      axios.get("/sanctum/csrf-cookie").then(() => {
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password,
          })
          .then(() => {
            if (this.$store.state.login.user) {
              this.$router.push("/dashboard")
              this.loader = false
            } else {
              this.loader = false
            }
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

span {
  position: relative;
  top: -30px;
  left: 3px;
}
</style>