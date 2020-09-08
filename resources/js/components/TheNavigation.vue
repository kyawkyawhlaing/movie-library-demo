<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Navbar</a>
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
          <router-link to="/" class="nav-link active">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
          <router-link to="#" class="nav-link">Movie</router-link>
          <router-link to="#" class="nav-link">Series</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
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
</style>
