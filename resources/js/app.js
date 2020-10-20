
import View from './App1.vue';
import router from './router';
require('./bootstrap');

window.Vue = require('vue');

Vue.component('v-search', require('./components/Searchbox.vue').default);

const app = new Vue({
    router,
    render: h => h(View),
}).$mount('#app');
