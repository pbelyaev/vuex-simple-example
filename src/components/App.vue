<template>
    <div class="app">
        <counter-component></counter-component>

        <increment-component></increment-component>
    </div>
</template>

<script>
    import CounterComponent from './Counter.vue'
    import IncrementComponent from './Increment.vue'

    export default {
        components: {
            CounterComponent,
            IncrementComponent
        }
    }
</script>