
export default {
    state: {},

    getters: {},

    mutations: {},

    actions: {
        insertData( context, userInfo ) {
            return axios.post("/api/insertMovie", userInfo, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            })
        },
        getMovieData(context) {
            return axios.get("/api/insertMovie")
        }
    }
}