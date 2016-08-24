new Vue({
    el: '#vuex',

    vuex: {
        actions: {
            increment: function (store) {
                store.dispatch('INCREMENT');
            }
        },

        getters: {
            counter: function (state) {
                return state.counter;
            }
        }
    },

    store: new Vuex.Store({
        state: {
            counter: 0
        },

        mutations: {
            INCREMENT: function (state) {
                state.counter++;
            }
        }
    }),

    methods: {
        increment: function () {
            this.increment();
        }
    }
});