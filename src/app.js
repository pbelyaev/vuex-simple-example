import Vue from 'vue'

import App from './components/App.vue'

Vue.config.debug = true;
Vue.config.devTools = true;

new Vue({
    el: 'body',

    components: {
        App
    }
});