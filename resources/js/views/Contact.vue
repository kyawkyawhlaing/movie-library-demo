<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12" sm="6" md="7">
        <v-img
          class="hidden-sm-and-down"
          width="600"
          min-width="300"
          src="./images/18310.jpg"
          alt="Credit: rawpixel.com"
          contact
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="5">
        <div class="display-2 text--secondary mx-auto">Contact Me</div>
        <v-divider></v-divider>
        <v-form>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="name"
                :rules="rules.nameRules"
                counter="15"
                label="Name"
                append-icon="mdi-account-outline"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="email"
                :rules="rules.emailRules"
                label="Email"
                append-icon="mdi-email-outline"
                outlined
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            v-model="tel"
            :rules="rules.teleRules"
            append-icon="mdi-cellphone-android"
            label="Telephone"
            outlined
          ></v-text-field>
          <v-textarea
            clearable
            clear-icon="mdi-close-circle"
            label="Text"
            value="Send Message"
            prepend-icon="mdi-format-paragraph"
            rows="3"
          ></v-textarea>
          <v-btn
            class="ml-6"
            color="success"
            :loading="loader1"
            @click="loader = 'loader1'"
            >Submit
            <v-icon right dark> mdi-checkbox-marked-circle-outline </v-icon>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      tel: "",
      rules: {
        nameRules: [(v) => v.length <= 15 || "Max 15 characters"],
        emailRules: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        teleRules: [(v) => v == Number || "Must be telephone number"],
      },
      loader: null,
      loader1: false,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 2000);
      this.loader = null;
    },
  },
};
</script>

<style>
</style>