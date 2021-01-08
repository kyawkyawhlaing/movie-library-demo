<template>
  <v-container>
    <v-app-bar app class="light-blue darken-2">
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

        <v-tabs hide-slider right>

          <v-tab class="hidden-sm-and-down" tag><v-search class="mt-7"/></v-tab>
          <v-tab :to="{ name: 'Home' }" class="white--text font-weight-bold hidden-md-and-down">
            Home
            <v-icon right>mdi-home</v-icon>
          </v-tab>
          <v-tab :to="{ name: 'Login' }" class="white--text font-weight-bold hidden-md-and-down">
            Login
            <v-icon color="white" right>mdi-account-circle</v-icon>
          </v-tab>
        </v-tabs>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="light-blue lighten-1" absolute temporary right dense light>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="./images/rect48.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="mx-0 white--text"> Catalogue </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <v-list nav>
        <v-list-item :to="{ name: 'Home' }" class="white--text" link>
          <v-icon left>mdi-view-dashboard</v-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'Contact' }" class="white--text" link>
          <v-icon left>mdi-contacts-outline</v-icon>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'Login' }" class="white--text" link>
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
