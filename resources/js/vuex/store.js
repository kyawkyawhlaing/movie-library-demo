import vuex from "vuex";
import login from "./modules/UserLogin";
import insertMovie from "./modules/InsertMovie";
import DashboardDataTable from "./modules/DashboardDataTable";

Vue.use(vuex);

export default new vuex.Store({
    modules: { 
        login ,
        insertMovie,
        DashboardDataTable
    },

    state: {},

    getters: {},

    mutations: {},

    actions: {},

});
