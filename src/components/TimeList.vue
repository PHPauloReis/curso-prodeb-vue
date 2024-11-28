<template>
    <div class="card">
        <h1>{{ totalDeTimes }}</h1>
        <h2 class="header">{{ title }}</h2>
        <ul class="list">
            <li :class="{ 'fundoVermelho': time.length <= 5 }" v-for="time of timeList" :key="time">{{ time }}</li>
        </ul>
        <input type="text" v-model="timeAtual">
        <button @click="incluirTime">Incluir time</button>
    </div>
</template>

<style>

.fundoVermelho {
    background-color: red;
    color: white;
}

.card {
  border: 1px solid #ECECEC;
  padding: 20px;
}

.header {
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
}

.list {
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
}

.list li {
  padding: 8px;
  border: 1px solid #ECECEC;
  margin-bottom: 3px;
  border-radius: 8px;
}

</style>

<script>

import { useCounterStore } from '@/stores/counter'

export default {
    name: 'TimeList',
    props: {
        title: {
            type: String,
            required: true
        },
        times: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            state: null,
            timeAtual: '',
            timeList: []
        }
    },
    created() {
        this.state = useCounterStore()
    },
    mounted() {
        this.timeList = [ ...this.times ]
    },
    computed: {
        totalDeTimes() {
            return this.state.doubleCount
        }
    },
    methods: {
        incluirTime() {
            this.timeList.push(this.timeAtual)
            this.incrementarCounter()
        },
        incrementarCounter() {
            this.state.increments()
        }
    }
}

</script>