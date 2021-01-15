<template>
  <v-container>
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
          <!-- <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="green lighten-2" dark v-bind="attrs" v-on="on">
                  New Item
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline grey lighten-2">
                  V-Catalogue
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-text-field label="movie"></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field label="cast"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field label="image"></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field label="summary"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" text>Cancle</v-btn>
                  <v-btn color="primary" text @click="dialog = false">
                    Update
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div> -->
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
        <!-- <v-icon small class="mx-2" @click="editItem(item)">mdi-pencil</v-icon> -->
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
    };
  },
  methods: {
    deleteItem(payload) {
      const movieId = payload.id;
      this.$store.dispatch("deleteItem", movieId)
    }
  },
  mounted() {
    this.$store.dispatch("getMovieInfo").then( ({data}) => {
      this.desserts = data.movies
      console.log(this.desserts)
    });
  },
};
</script>

<style>
</style>