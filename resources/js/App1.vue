<template>
  <v-app>
    <TheNavigation v-if="$route.meta.requiresAuth !== true && $route.name !== 'NotFound'" />
    <v-main class="mb-6">
      <router-view :key="$route.path"></router-view>
    </v-main>
    <v-footer v-if="this.$route.path !== '/dashboard'" color="success" class="white--text"><h1 class="display-1 mx-auto">Created by KyawHlaing</h1></v-footer>
  </v-app>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
*,
html,
body {
  margin: 0;
  padding: 0;
  list-style: 0;
  font-size: 1em;
  font-weight: 600;
}

</style>