import vuex from "vuex";

Vue.use(vuex);

export default new vuex.Store({
    modules: {},

    state: {
        user: "",
        error: ""
    },

    getters: {},

    mutations: {
        SET_USER_DATA(state, userData) {
            state.user = userData.user.name;
            localStorage.setItem("user", JSON.stringify(userData.user.name));
            window.axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${userData.token}`;
        },
        RM_USER_DATA(state) {
            state.user = null;
            localStorage.removeItem("user");
            location.reload();
        }
    },

    actions: {
        login({ state, commit }, credentials) {
            return axios
                .post("/api/login", credentials)
                .then(response => {
                    if (
                        response.data.user.email == credentials.email &&
                        !response.data.message
                    ) {
                        commit("SET_USER_DATA", response.data);
                    } else {
                        console.log(response.data.message);
                    }
                })
                .catch(() => (state.error = "Credentials do not match with the existing record."));
        },

        logout({ commit }) {
             axios
                .post("/api/logout")
                .then((response) => commit("RM_USER_DATA"));
        }
    }
});
