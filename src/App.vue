<template>

  <h1>{{ mensagem }}</h1>

  <BandeiraComponente />

  <BotaoComponente />
  <BotaoComponente :buttonClass="'active'" texto="Gabriel" />
  <BotaoComponente :buttonClass="'danger'" texto="Sérgio" />
  
  <TimeList title="Time mais legais" :times="times" />
  <TimeList title="Times barriados" :times="timesBarriados" />
  
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-style: normal;
}

h1 {
  margin: 20px 0;
}

</style>

<script>
import TimeList from './components/TimeList.vue';
import BandeiraComponente from './components/BandeiraComponente.vue';
import BotaoComponente from './components/BotaoComponente.vue';

export default {
  components: {
    TimeList,
    BandeiraComponente,
    BotaoComponente
  },
  data() {
    return {
      store: null,
      mensagem: 'Hello From Prodeb Novamente!',
      times: [],
      timesBarriados: []
    }
  }
}

</script>