<template>
  <v-form ref="form" id="form" enctype="multipart/form-data" lazy-validation>
    <v-container>
      <!-- movie/cast/duration field-->
      <v-row>
        <v-col lg="4">
          <v-text-field
            v-model="form.movie"
            label="Movie"
            :rules="[rules.required, rules.counter]"
            prepend-icon="mdi-movie-roll"
            solo-inverted
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="form.cast"
            label="Cast"
            :rules="[rules.required, rules.string]"
            prepend-icon="mdi-movie-open"
            solo-inverted
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="form.duration"
            label="Duration"
            :rules="[rules.required, rules.duration]"
            prepend-icon="mdi-av-timer"
            solo-inverted
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- rating/image/director/link field-->
      <v-row>
        <v-col>
          <v-text-field
            v-model="form.rating"
            label="Rating"
            :rules="[rules.required, rules.rating]"
            prepend-icon="mdi-star"
            solo-inverted
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="form.director"
            label="Director"
            :rules="[rules.required]"
            solo-inverted
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="form.link"
            label="Link"
            :rules="[rules.required]"
            hint="Must be embed link from youtube.(i.e-8EJ3zbKTWQ8)"
            solo-inverted
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-file-input
            v-model="form.image"
            accept="image/*"
            prepend-icon="mdi-camera"
            :rules="[rules.picture]"
            show-size
            truncate-length="10"
          ></v-file-input>
        </v-col>
      </v-row>

      <!-- checkbox field-->
      <v-row class="ml-9">
        <v-col cols="2" v-for="genre in genres" :key="genre.id">
          <v-checkbox
            v-model="form.genres"
            :value="genre.genre"
            :color="colour[Math.floor(Math.random() * (colour.length + 1))]"
            :label="genre.genre"
            :key="genre.id"
          ></v-checkbox>
        </v-col>
      </v-row>

      <!--textarea/date field-->
      <v-row>
        <v-col cols="6">
          <v-textarea
            v-model="form.summary"
            background-color="light-blue lighten-4"
            prepend-icon="mdi-comment"
            :rules="[rules.required]"
            filled
          >
          </v-textarea>
        </v-col>
        <v-col cols="5">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.releaseDate"
                :rules="[rules.required]"
                label="Date"
                hint="YYYY-MM-DD format"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                autocomplete="off"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="form.releaseDate"
              :max="new Date().toISOString().substr(0, 10)"
              no-title
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <!--button-->
      <v-row>
        <v-col cols="6">
          <v-btn
            color="light-blue lighten-4"
            class="blue--text ml-9"
            form="form"
            :loading="loader1"
            @click="insertData"
            depressed
            >SUBMIT</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-alert
            class="ml-9"
            v-show="!!message"
            type="success"
            dense
            dismissible
          >
            {{ message }}
          </v-alert>
          <v-alert class="ml-9" v-show="!!error" type="error" dense dismissible>
            {{ error }}
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import color from "../../color";

export default {
  data() {
    return {
      genres: null,
      releases: null,
      picker: null,
      menu: false,
      message: null,
      error: null,
      colour: color,
      loader1: false,
      form: {
        movie: "",
        image: null,
        rating: "",
        summary: "",
        duration: "",
        cast: "",
        releaseDate: "",
        genres: [],
      },
      rules: {
        required: (value) => !!value || "required.",
        counter: (value) => value.length <= 100 || "Max 100 characters.",
        string: (value) => value.length <= 255 || "Must be String.",
        rating: (number) =>
          number.valueOf() <= 10 || "Highest rating value is 10",
        duration: (value) => {
          const pattern = /[0-9]{1||2}[a-zA-Z]{2}[0-9]{1||2}[a-zA-Z]{2}/g;
          return pattern.test(value);
        },
        picture: (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      },
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"),500);
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    insertData() {
      this.$refs.form.validate();
      this.loader1 = true;
      let formData = new FormData();
      formData.append("movie", this.form.movie);
      formData.append("file", this.form.image);
      formData.append("director", this.form.director);
      formData.append("link", this.form.link);
      formData.append("rating", this.form.rating);
      formData.append("summary", this.form.summary);
      formData.append("duration", this.form.duration);
      formData.append("cast", this.form.cast);
      formData.append("releaseDate", this.form.releaseDate);
      formData.append("genres", this.form.genres);

      this.$store
        .dispatch("insertData", formData)
        .then(({ data }) => {
          this.message = data.message;
        })
        .catch(() => (this.error = "May be Duplicated Error Or Empty input field!"))
        .finally(() => this.loader1 = false);
    },
  },
  created() {
    this.$store.dispatch("getMovieData").then((response) => {
      this.genres = response.data.genres;
      this.releases = response.data.releases;
    });
  },
};
</script>
<style scoped>
</style>