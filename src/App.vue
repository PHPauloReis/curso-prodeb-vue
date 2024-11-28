<template>

  <h1>{{ mensagem }}</h1>

  <TimeList title="Time mais legais" :times="times" />
  <TimeList title="Times barriados" :times="times" />
  
</template>

<style>

* {
  margin: 0;
  padding: 0;
}

h1 {
  margin: 20px 0;
}

</style>

<script>
import TimeList from './components/TimeList.vue';

export default {
  components: {
    TimeList
  },
  data() {
    return {
      store: null,
      mensagem: 'Hello From Prodeb Novamente!',
      times: [
        'Corinthians', 'Bahia', 'Ipiranga', 
        'Bragantino', 'Ibis', 'XV de piracicaba'
      ],
      timesBarriados: [
        'Palmeiras', 'Vitória', 'Sport', 'Santos'
      ]
    }
  }
}

</script>