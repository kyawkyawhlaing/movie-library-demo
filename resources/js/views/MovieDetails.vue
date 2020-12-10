<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3" md="4">
        <v-card height="auto">
          <v-img :src="'../../storage/'+item.image" :alt="item.movie" :key="item.id" contain></v-img>
          <v-card-text>
            <p class="text--primary mb-0">
              <span class="font-weight-bold black--text">IMDb</span> - {{item.rating}}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="9" md="8">
        <v-card>
          <v-card-title class="display-3"
            > {{ item.movie }} </v-card-title
          >
          <v-divider></v-divider>
          <v-card-text>
            <v-row align="center" class="ml-2">
              <div class="font-weight-bold">Release - <span>{{item.releaseDate}}</span></div>
              <v-spacer></v-spacer>
              <div class="mr-3 font-weight-bold">
                Duration - <span class="">{{item.duration}}</span>
              </div>
            </v-row>
            <br />
            <v-chip-group active-class="teal accent-4 white--text" column>
              <v-chip color="error">Action</v-chip>

              <v-chip color="warning">Adventure</v-chip>

              <v-chip color="success">Adult</v-chip>

              <v-chip color="primary">Anime</v-chip>
            </v-chip-group>
            <br /><br />
            <div>
              {{item.summary}}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-row justify="center">
              <div class="ml-3">Director</div>
              <v-spacer></v-spacer>
              <div class="mr-3">John</div>
            </v-row>
            <br />
            <v-divider></v-divider>
            <br />
            <v-row justify="center">
              <div class="ml-3">Starring</div>
              <v-spacer></v-spacer>
              <div class="mr-3">John Doe,Marry Jane</div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card flat>
      <v-sheet>
        <v-responsive :aspect-ratio="16 / 9">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ShZ978fBl6Y"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return { 
      item: "",
      movieId: this.$route.params.id 
      };
  },
  created() {
    this.movieDetail();
  },
  methods: {
    movieDetail() {
      axios.get("/api/getAllmovies").then((res) => {
        res.data.movies.map((movie) => {
          if(movie.id == this.movieId) { this.item = movie};
        });
      });
    },
  },
};
</script>

<style>
</style>