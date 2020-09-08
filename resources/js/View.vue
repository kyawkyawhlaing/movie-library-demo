<template>
  <div>
    <TheNavigation />
    <router-view :key="$route.path" />
    <Footer />
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    TheNavigation,
    Footer,
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

nav {
  background: lightseagreen;
}
</style>