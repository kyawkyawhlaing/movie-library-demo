<template>
  <div>
      <div class="card">
        <img src="require('...')" alt="...">
        <div class="card-body">
          <h4 class="card-title">{{ title }}</h4>
          <p class="card-text">{{ content }}</p>
          <router-link to="#">See More</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
}
</script>

<style>

</style>