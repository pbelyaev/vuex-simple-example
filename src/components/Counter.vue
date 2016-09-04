<template>
    <div class="counter">
        <div class="counter__value">{{ counter }}</div>
    </div>
</template>

<script>
    import Store from '../store/store'
    import { getCount } from '../store/getters'

    export default {
        store: Store,

        vuex: {
            getters: {
                counter: getCount
            }
        }
    }
</script>