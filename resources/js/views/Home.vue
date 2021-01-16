<template>
  <div class="home">
    <v-parallax
      height="300"
      src="https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656_960_720.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="white--text text-center">
          <h1 class="display-1 font-weight-bold">Welcome to V-Catalogue</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            odit eaque harum earum optio, beatae asperiores porro temporibus
            accusamus labore rerum provident quo numquam quod? Dicta quidem
            impedit numquam nulla!
          </h5>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- movie card-->
    <v-container>
      <v-row class="mx-0">
        <template slot="progress">
        <v-progress-linear
          indeterminate
          color="deep-purple"
          absolute
        ></v-progress-linear>
        </template>
        <v-col cols="12" sm="3" md="3" v-for="item in items" :key="item.id">
          <v-skeleton-loader
            class="ma-10"
            type="card-avatar,divider"
            v-if="lazyloading"
          ></v-skeleton-loader>
          <v-card v-else class="mx-auto" :loading="isloading">
            <v-img
              :src="'./storage/' + item.image"
              height="250"
              :alt="item.movie"
              cover
            ></v-img>
            <v-card-title class="mx-auto">{{ item.movie }}</v-card-title>
            <v-card-subtitle class="font-weight-bold"
              >Rating {{ item.rating }}
              <v-btn
                :to="{ name: 'MovieDetails', params: { id: item.id } }"
                class="ml-4"
                color="light-blue lighten-1"
                @click="reserve"
                text
                fab
              >
                <v-icon>mdi-eye</v-icon>
              </v-btn>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- pagination -->
    <div class="text-center mb-7">
      <v-pagination
        v-model="meta.current_page"
        :length="meta.last_page"
        :total-visible="7"
        :value="meta.current_page"
        @input="getMovie"
        color="light-blue lighten-1"
        circle
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      items: "",
      meta: {},
      show: false,
      isloading: false,
      lazyloading: true,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      current_page: 1,
    };
  },
  created() {
    this.getMovie();
  },
  mounted() {
    setTimeout(() => (this.lazyloading = false), 2000);
  },
  methods: {
    reserve() {
      this.isloading = true;
      setTimeout(() => (this.isloading = false), 2000);
    },
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
