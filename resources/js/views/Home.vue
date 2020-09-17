<template>
  <div class="mb-5 mx-5 row">
    <h2 class="col-12 my-5">Movie</h2>
    <div class="row col-lg-8">
      <div class="poster col-md-3" v-for="item in items" :key="item.movie">
        <img :src="'./storage/'+ item.image" width="100%" height="260px" :alt="item.movie" />
        <p class="ellipsis">
          {{ item.movie}}
          <br />
          &starf; {{item.rating}}
        </p>
      </div>
    </div>
    <div class="col-lg-4 row bg-warning">
      <h4
        class="text-left col-lg-5 offset-lg-1"
        v-for="item in items"
        :key="item.movie"
      >{{ item.release_year}}</h4>
    </div>
    <pagination :meta="meta" @pagination="getMovie" />
  </div>
</template>

<script>
import pagination from "../components/Pagination";
export default {
  components: {
    pagination,
  },
  data() {
    return {
      items: null,
      meta: {},
    };
  },
  created() {
    this.getMovie();
  },
  methods: {
    getMovie(page) {
      axios
        .get("/api/movie", {
          params: { page },
        })
        .then((response) => {
          this.items = response.data.data;
          this.meta = response.data.meta;
        });
    },
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