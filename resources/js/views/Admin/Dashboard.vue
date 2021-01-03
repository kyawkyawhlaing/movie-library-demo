<template>
  <div>
    <v-app-bar app color="white" flat>
      <v-toolbar-title>V-Catalogue</v-toolbar-title>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>
      <v-spacer></v-spacer>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab :to="{ name: 'Dashboard' }"> Dashboard </v-tab>
        <v-tab :to="{ name: 'InsertMovie' }"> Insert Data </v-tab>
        <v-tab @click.prevent="logout"> Logout </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="36"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3 pt-3">
      <h1 class="ma-0">V-Catalogue</h1>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <v-sheet min-height="70vh" rounded="lg">
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>

export default {
  methods: {
    logout() {
        this.$store.dispatch('logout').then(() => {
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