import App from "./App.vue";
import router from "./router";
import store from "./vuex/store"
import Vuetify from "../plugins/vuetify";
require("./bootstrap");

window.Vue = require("vue");

Vue.component("v-search", require("./components/Searchbox.vue").default);

const app = new Vue({
    router,
    store,
    vuetify: Vuetify,
    render: h => h(App)
}).$mount("#app");
