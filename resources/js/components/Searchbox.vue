<template>
  <div class="searchbox">
    <form>
      <label for="searchbox">Search</label>
      <input type="search" name="search" id="searchbox" v-model="search" />
      <button type="button" @click="getData">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    getData() {
      axios
        .get("api/movie")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
input[type="search"] {
  border: none;
}
button {
  border: none;
  background-color: transparent;
  margin: auto 0.5rem;
}
button > i {
  color: crimson;
  cursor: pointer;
}
.searchbox {
  width: 100%;
  height: min-content;
  background-color: white;
  border-radius: 25px;
  margin: auto;
}
label {
  margin: auto 15px;
}
@media screen and (max-width: 992px) {
  .searchbox {
    width: 350px;
    margin: 0;
  }
}
@media (max-width: 400px) {
  .searchbox {
    width: 300px;
    margin: 0;
  }
  input[type="search"] {
    width: 180px;
  }
  button {
    margin: 0;
  }
}
</style>