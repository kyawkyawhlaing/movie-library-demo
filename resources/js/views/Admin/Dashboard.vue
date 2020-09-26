<template>
<div>
  <h1>hello !I am Dashboard.</h1>
  <button class="btn btn-outline-danger" @click.prevent="logout">logout</button>
</div>
</template>

<script>
export default {
  methods: {
    logout() {
      axios.post("/api/logout")
      .then(() => this.$router.push({name: "Home"}));
    },
  },
};
</script>

<style>
</style>