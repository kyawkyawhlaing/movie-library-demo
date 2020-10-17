<template>
  <div>
    <form
      @submit.prevent="insert"
      class="col-6 mx-auto"
      enctype="multipart/form-data"
    >
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="Movie">Movie</label>
          <input type="text" v-model="movie" class="form-control" id="Movie" />
        </div>
        <div class="form-group col-md-6">
          <label for="Cast">Cast</label>
          <input type="text" v-model="cast" class="form-control" id="Cast" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="Rating">Rating</label>
          <input
            type="number"
            v-model="rating"
            class="form-control"
            id="Rating"
            step="any"
            min="0"
            max="10"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="Duration">Duration</label>
          <input
            type="text"
            v-model="duration"
            class="form-control"
            id="Duration"
          />
        </div>
      </div>
      <div class="col-12 my-2">
        <h3>Movie Genre</h3>
        <div
          class="form-check form-check-inline col-2"
          v-for="(genre, index) in genres"
          :key="index"
        >
          <input
            class="form-check-input"
            type="checkbox"
            v-model="movieGen"
            :id="'checkbox' + genre.id"
            :value="genre.genre"
          />
          <label class="form-check-label" :for="'checkbox' + genre.id">
            {{ genre.genre }}
          </label>
        </div>
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Summary</span>
        </div>
        <textarea class="form-control" v-model="summary"></textarea>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="ReleaseDate">Release Date</label>
          <input
            type="date"
            v-model="releaseDate"
            class="form-control"
            id="ReleaseDate"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="ReleaseYear">Release Year</label>
          <select class="form-control" v-model="releaseYear" id="ReleaseYear">
            <option value="" selected>Release Year</option>
            <option
              v-for="release in releases"
              :key="release.id"
              :value="release.releaseYear"
            >
              {{ release.releaseYear }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <input
          type="file"
          ref="image"
          class="form-control-file"
          accept="image/*"
          @change="selected"
        />
      </div>
      <button type="submit" class="btn btn-danger my-3">Insert</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: null,
      releases: null,
      movie: "",
      cast: "",
      rating: "",
      duration: "",
      releaseDate: "",
      releaseYear: "",
      summary: "",
      selectedFile: null,
      movieGen: [],
    };
  },
  methods: {
    insert() {
      let formData = new FormData();
          formData.append("movie",this.movie)
          formData.append("image",this.selectedFile)
          formData.append("rating",this.rating)
          formData.append("summary",this.summary)
          formData.append("duration",this.duration)
          formData.append("cast",this.cast)
          formData.append("releaseDate",this.releaseDate)
          formData.append("releaseYear",this.releaseYear)
          formData.append("genres",this.movieGen)
      axios
        .post("/api/insertMovie", formData)
        .catch((error) => console.log(error.response.data));
    },
    selected() {
      this.selectedFile = this.$refs.image.files[0];
      console.log(this.selectedFile);
    },
  },
  created() {
    axios.get("/api/insertMovie").then((response) => {
      this.genres = response.data.genres;
      this.releases = response.data.releases;
    });
  },
};
</script>

<style>
</style>