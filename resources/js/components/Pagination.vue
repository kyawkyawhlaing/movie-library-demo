<template>
  <div class="col-4 offset-4">
    <ul class="pagination col-4 offset-4">
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          @click.prevent="changePage(meta.current_page-1)"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{'active': meta.current_page === paginate}"
        v-for="paginate in meta.last_page"
        :key="paginate"
      >
        <a class="page-link" @click.prevent="changePage(paginate)">{{paginate}}</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click.prevent="changePage(meta.current_page+1)" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["meta"],
  data() {
    return {};
  },
  methods: {
    changePage(page) {
      if (page <= this.meta.last_page) {
        this.$emit("pagination", page);
        console.log(page);
      }
    },
  },
};
</script>

<style scoped>
</style>