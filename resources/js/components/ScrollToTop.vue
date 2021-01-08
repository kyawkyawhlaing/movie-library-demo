<template>
  <div>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      color="light-blue darken-3"
      @click="toTop"
      elavation="3"
      fab
      fixed
      bottom
      right
      ><v-icon color="white">mdi-apple-keyboard-caps</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 10;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style>
</style>