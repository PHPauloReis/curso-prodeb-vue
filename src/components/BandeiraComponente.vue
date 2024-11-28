<template>
    <h1>{{ totalDeTimes }}</h1>
</template>

<script>

import { useCounterStore } from '@/stores/counter'

export default {
    name: 'BandeiraComponente',
    data() {
        return {
            state: null
        }
    },
    created() {
        this.state = useCounterStore()
    },
    computed: {
        totalDeTimes() {
            return this.state.doubleCount
        }
    }
}

</script>