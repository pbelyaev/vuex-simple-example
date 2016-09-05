const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex);

const state = {
    count: 0
};

const mutations = {
    INCREMENT_VALUE(state) {
        state.count++;
    }
};

export default new Vuex.Store({
    state,
    mutations
});
