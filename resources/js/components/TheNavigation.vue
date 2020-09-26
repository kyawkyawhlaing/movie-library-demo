<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand">
        <span>K</span>-
        <span class="text-success">m</span>
        <span class="text-white">o</span>
        <span class="text-secondary">v</span>
        <span class="text-purple">i</span>
        <span class="text-primary">e</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <v-search></v-search>
          <router-link to="/" class="nav-link active text-white">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
          <router-link to="#" class="nav-link text-white">Browse</router-link>
          <router-link to="/contact" class="nav-link text-white">Contact</router-link>
          <router-link :to="{name: 'Login'}" class="nav-link text-white">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
<style scoped>
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bolder;
}

a {
  margin: 0 1.5rem;
  color: white;
}

div.navbar-nav {
  margin-left: auto;
}

.navbar-brand {
  font-size: 2.5rem;
}

.navbar-brand > span {
  color: white;
}

.navbar-brand > .text-purple {
  color: purple;
}
</style>
