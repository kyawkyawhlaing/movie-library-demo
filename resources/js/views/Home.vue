<template>
  <div class="mb-5 mx-5 row">
    <div class="row col-lg-8">
      <div class="poster" v-for="item in items" :key="item.movie">
        <img src="./pexels-matt-hardy-5059013.jpg" width="165px" height="248px" alt="girl" />
        <p class="ellipsis">
          {{ item.movie}}
          <br />
          &starf; {{item.rating}}
        </p>
      </div>
    </div>
    <div class="col-lg-4 row">
      <h4
        class="text-left col-lg-5 offset-lg-1"
        v-for="item in items"
        :key="item.movie"
      >{{ item.release_year}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null,
    };
  },
  created() {
    axios.get("/api/movie").then((response) => {
      this.items = response.data.data;
    });
  },
};
</script>

<style scoped>
.poster {
  margin: 0.5rem 1rem;
}
.ellipsis {
  width: 148px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>