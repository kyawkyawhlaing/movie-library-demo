
import View from './View';
import router from './router';
require('./bootstrap');

window.Vue = require('vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    router,
    render: h => h(View),
}).$mount('#app');
