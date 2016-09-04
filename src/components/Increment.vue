<template>
    <div class="increment">
        <button type="button" class="increment__button" @click="increment">Increment</button>
    </div>
</template>

<script>
    import Store from '../store/store'
    import { increment } from '../store/actions'

    export default {
        store: Store,

        vuex: {
            actions: {
                increment: increment
            }
        }
    }
</script>