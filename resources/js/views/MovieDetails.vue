<template>
  <v-container>
    <v-row>
      <!-- poster -->
      <v-col cols="12" sm="3" md="4">
        <v-skeleton-loader
          type="image,list-item"
          v-if="lazyloading"
        ></v-skeleton-loader>
        <v-card v-else height="auto">
          <v-img
            :src="'../../storage/' + item.image"
            :alt="item.movie"
            :key="item.id"
            contain
          ></v-img>
          <v-card-text>
            <p class="text--primary mb-0">
              <span class="font-weight-bold black--text">Rating</span> -
              {{ item.rating }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- about movie-->
      <v-col sm="9" md="8">
        <v-skeleton-loader
          type="card-heading,article"
          v-if="lazyloading"
        ></v-skeleton-loader>
        <v-card color="light-blue darken-2 white--text" elevation="10" v-else>
          <v-card-title class="display-3"> {{ item.movie }} </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="white--text">
            <v-row align="center" class="ml-2">
              <div class="font-weight-bold">
                Release - <span>{{ item.releaseDate }}</span>
              </div>
              <v-spacer></v-spacer>
              <div class="mr-3 font-weight-bold">
                Duration - <span class="">{{ item.duration }}</span>
              </div>
            </v-row>
            <br />
            <v-chip-group active-class="teal accent-4 white--text" column>
              <v-chip
                v-for="genre in genres"
                class="white--text"
                :color="color[Math.floor(Math.random() * color.length + 1)]"
                :key="genre.id"
                >{{ genre.genre }}</v-chip
              >
            </v-chip-group>
            <br /><br />
            <div>
              {{ item.summary }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="white--text">
            <v-row justify="center">
              <div class="ml-3">Director</div>
              <v-spacer></v-spacer>
              <div class="mr-3">{{ item.director | N/A }}</div>
            </v-row>
            <br />
            <v-divider></v-divider>
            <br />
            <v-row justify="center">
              <div class="ml-3">Starring</div>
              <v-spacer></v-spacer>
              <div class="mr-3">{{ item.cast }}</div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!--video-->
    <v-card flat>
      <v-sheet>
        <v-skeleton-loader
          v-if="lazyloading"
          type="card-avatar"
        ></v-skeleton-loader>
        <v-responsive v-else :aspect-ratio="16 / 9">
          <iframe
            width="100%"
            height="500"
            :src="`https://www.youtube.com/embed/${item.link}`"
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
import color from "../color";

export default {
  data() {
    return {
      item: "",
      genres: [],
      color: color,
      movieId: this.$route.params.id,
      lazyloading: true,
    };
  },
  created() {
    this.movieDetail();
  },
  methods: {
    movieDetail() {
      let firstOne = axios.get("/api/getAllmovies");
      let secondOne = axios.get(`/api/getAllmovies/${this.movieId}`);

      axios
        .all([firstOne, secondOne])
        .then(
          axios.spread((...responses) => {
            const firstResponse = responses[0];
            let secondResponse = responses[1];

            //first api response
            firstResponse.data.movies.map((movie) => {
              if (movie.id == this.movieId) {
                this.item = movie;
              }
              this.lazyloading = false;
            });

            //second api response
            secondResponse.data.genres.map((genre) => this.genres.push(genre));
          })
        )
        .catch((errors) => console.error(errors));
    },
  },
};
</script>
