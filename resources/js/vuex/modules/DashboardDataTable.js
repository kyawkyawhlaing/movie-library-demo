export default {
    state: {},

    getters: {},

    actions: {
        getMovieInfo() {
            return axios.get("/api/getMovieData");
        },
        deleteItem(context, id) {
            return axios.delete(`/api/getMovieData/${id}`);
        }
    },

    mutations: {}
};
