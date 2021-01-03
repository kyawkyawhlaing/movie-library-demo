<template>
  <div class="home">
    <v-carousel
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      cycle
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container class="grey lighten-5">
      <v-row class="mx-0">
        <v-col cols="12" sm="3" md="3" v-for="item in items" :key="item.id">
          <v-skeleton-loader type="card-avatar" v-if="lazyloading"></v-skeleton-loader>
          <v-card v-else class="mx-auto" :loading="isloading">
            <template slot="progress">
              <v-progress-linear
                indeterminate
                height="6"
                color="deep-purple"
              ></v-progress-linear>
            </template>
            <!-- https://cdn.vuetifyjs.com/images/cards/sunshine.jpg -->
            <v-img
              :src="'./storage/'+ item.image"
              height="300"
              :alt="item.movie"
              cover
            ></v-img>
            <v-card-title class="mx-auto">{{item.movie}}</v-card-title>
            <v-card-subtitle class="font-weight-bold">IMDb {{item.rating}}</v-card-subtitle>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                :to="{name: 'MovieDetails',params: { id: item.id}}"
                class="my-2"
                color="teal accent-4"
                @click="reserve"
                text
                >Explore</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center mb-7">
      <v-pagination
        v-model="meta.current_page"
        :length="meta.last_page"
        :total-visible="7"
        :value="meta.current_page"
        @input="getMovie"
        color="teal accent-3"
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
    setTimeout(() => (this.lazyloading = false),5000);
  },
  methods: {
    reserve() {
      this.isloading = true;
      setTimeout(() => (this.isloading = false), 2000);
    },
    getMovie(page) {
      axios
        .get("/api/movie",{
          params: {page}
        })
        .then((response) => {
          this.items = response.data.data;
          this.meta = response.data.meta;
        });
    },
  },
};
</script>
