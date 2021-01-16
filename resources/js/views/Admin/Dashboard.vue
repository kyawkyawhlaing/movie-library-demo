<template>
  <div>
    <v-app-bar app color="light-blue darken-1" flat>
      <v-toolbar-title>V-Catalogue</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tabs centered class="ml-n9" color="white">
        <v-tab :to="{ name: 'DashboardDataTable' }" class="font-weight-bold"> Dashboard </v-tab>
        <v-tab :to="{ name: 'InsertMovie' }" class="font-weight-bold"> Insert Data </v-tab>
        <v-tab @click.prevent="logout" class="font-weight-bold"> Logout </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="36"
      >
      <img src="https://image.freepik.com/free-vector/boy-with-dog-cartoon-design_24640-46773.jpg" alt="avatar">
      </v-avatar>
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