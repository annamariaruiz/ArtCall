<template>
  <div if='home'>
    <div id='center'>
    </div>
    <h1> oh look, you've made it to the home page</h1>
    <div class='grid-container' id='commission-showcase'>
      <div class='grid-row'>
        <commission-card></commission-card>
        <commission-card></commission-card>
        <commission-card></commission-card>

      </div>
      <div class='grid-row'>
        <commission-card></commission-card>
        <commission-card></commission-card>
        <commission-card></commission-card>

      </div>
      <div class='grid-row'>
        <commission-card></commission-card>
        <commission-card></commission-card>
        <commission-card></commission-card>
      <p>{{cards[0]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CommissionCard from '/src/components/CommissionCard.vue'
export default {
  data(){
    return {
      cards: []
    }
  },
  name: 'home',
  methods: {

  },
  components: {
    'commission-card': CommissionCard
  },
  created() {
    axios.get('http://localhost:3000/cards')
      .then((response) => {
        console.log(response.data)
        this.cards = response.data
      })
  }
}
</script>

<style>
.grid-container{
  display: grid;
}
.grid-row{
  display: inline-block;
}
</style>