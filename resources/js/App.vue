<template>
  <div>
    <v-app>
      <TheNavigation
        v-if="$route.meta.requiresAuth !== true && $route.name !== 'NotFound'"
      />
      <v-main>
        <v-scrollTop></v-scrollTop>
        <router-view :key="$route.path"></router-view>
      </v-main>
      <v-footer
        v-if="$route.meta.requiresAuth !== true && $route.name !== 'NotFound'"
        color="light-blue darken-3"
        class="white--text"
        ><h1 class="display-1 mx-auto">Created by KyawHlaing</h1></v-footer
      >
    </v-app>
  </div>
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
  list-style: 0;
  font-size: 1em;
  font-weight: 600;
}
.v-application .mb-6 {
  margin-bottom: 0 !important;
}
</style>