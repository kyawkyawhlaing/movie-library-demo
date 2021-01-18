<template>
  <v-container>
    <v-alert v-show="message" border="left" type="success" dismissible> {{ message }}</v-alert>
    <v-alert v-show="error" border="left" type="error" dismissible> {{error}} </v-alert>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My CRUD</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:[`item.image`]="{ item }">
        <v-img
          max-height="50"
          max-width="50"
          :src="`../../../storage/${item.image}`"
        ></v-img>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-icon large class="mx-2" color="error" @click="deleteItem(item)"
          >mdi-delete</v-icon
        >
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Movie", align: "start", value: "movie" },
        { text: "Id", value: "id" },
        { text: "Image", value: "image", sortable: false },
        { text: "Actions", value: "action", sortable: false },
      ],
      desserts: [],
      message: "",
      error: null
    };
  },
  methods: {
    deleteItem(payload) {
      const movieId = payload.id;
      this.$store.dispatch("deleteItem", movieId).then(() => {
        const indx = this.desserts.findIndex(dessert => dessert.id == movieId);
        this.desserts.splice(indx, 1);
        this.message = "Successfully Deleted!"
      })
      .catch(() => this.error = "Unauthorized!You need to login again.Pls do not reload the page.")
    },
  },
  mounted() {
    this.$store.dispatch("getMovieInfo").then(({ data }) => {
      this.desserts = data.movies;
      console.log(this.desserts.id);
    });
  },
};
</script>

<style>
</style>