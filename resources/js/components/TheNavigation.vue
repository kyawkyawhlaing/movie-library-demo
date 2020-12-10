<template>
  <v-container>
    <v-app-bar app class="success">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./images/rect48.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1"
          contain
          min-width="100"
          src="./images/text879.png"
          width="100"
        />
      </div>

      <v-spacer class="hidden-md-and-down"></v-spacer>

      <v-col cols="3" class="mt-7 hidden-md-and-down"> <v-search /> </v-col>
      <v-col cols="3" class="hidden-md-and-down">
        <v-btn class="float-right" :to="{name: 'Login'}" text>
          <span class="mr-2">Login</span>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
        <v-btn class="float-right" :to="{name: 'Home'}" text>
          <span class="mr-2">Home</span>
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
      </v-col>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary dense dark>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="./images/rect48.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="mx-0"> Catalogue </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <v-list nav>
        <v-list-item :to="{name: 'Home'}" link>
          <v-icon left>mdi-view-dashboard</v-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{name: 'Contact'}" link>
          <v-icon left>mdi-contacts-outline</v-icon>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{name: 'Login'}" link>
          <v-icon left>mdi-account-circle-outline</v-icon>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.v-btn {
  border: none;
}
</style>