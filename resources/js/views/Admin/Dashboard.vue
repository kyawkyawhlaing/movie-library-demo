<template>
<div>
<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-danger navbar-light">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars text-white"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" class="nav-link text-white">Home</a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" class="nav-link text-white">Movie List</a>
    </li>
  </ul>

  <!-- SEARCH FORM -->
  <form class="form-inline ml-3">
    <div class="input-group input-group-sm">
      <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
      <div class="input-group-append">
        <button class="btn btn-navbar" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </form>
</nav>
<!-- /.navbar -->
<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="index3.html" class="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
          style="opacity: .8">
    <span class="brand-text font-weight-light">K-movie</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="dist/img/avatar04.png" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
      <a href="#" class="d-block">user</a>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav class="mt-2" >
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library -->
        <li class="nav-item has-treeview menu-open">
          <a class="nav-link active bg-danger">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Dashboard
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <router-link to="/insertmovie" class="nav-link active">
                <i class="far fa-circle nav-icon"></i>
                <p>MovieInsert</p>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
        <a  @click.prevent="logout" class="nav-link">
            <i class="nav-icon fas fa-sign-out-alt text-danger"></i>
            <p>Logout</p>
        </a>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>
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

<style scoped>
a {
  cursor: pointer;
}
</style>