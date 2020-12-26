<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab>
          Dashboard
        </v-tab>
        <v-tab :to="{name: 'InsertMovie'}">
          Insert Data
        </v-tab>
        <v-tab @click.prevent="logout">
          Logout
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import store from "../../store.js";

export default {
  methods: {
    logout() {
      axios.post("/api/logout").then(() => {
        // store.email = null;
        localStorage.removeItem("email");
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>