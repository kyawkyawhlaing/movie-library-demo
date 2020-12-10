<template>
  <v-autocomplete
    v-model="model"
    :items="items"
    cache-items
    :loading="isLoading"
    :search-input.sync="search"
    hide-no-data
    hide-selected
    prepend-icon="mdi-movie-search"
    label="Search Movie"
    v-on:keydown.enter="pathToDetails"
    clearable
    flat
    return-object
  >
  </v-autocomplete>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      isLoading: false,
      model: null,
      items: [],
      search: null,
      states: [],
      result: null
    };
  },
  watch: {
    search(val) {
      val && val !== this.model && this.querySelections(val);
    },
  },
  created() {
    axios.get("/api/getAllmovies").then((res) => {
      const movies = res.data.movies;
      movies.map((movie) => {
        return this.states.push(movie.movie);
      });
    });
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
    pathToDetails() {
      axios.get("/api/getAllmovies").then((res) => {
        const matchRes = res.data.movies;
        matchRes.map((match) => {
          if (match.movie == this.model) return this.result = match.id;
        });
        this.$router.push({ name: "MovieDetails", params: { id: this.result } });
      });
    },

  },
};
</script>

<style>
</style>