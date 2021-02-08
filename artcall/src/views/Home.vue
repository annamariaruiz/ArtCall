<template>
  <div if='home'>
    <div id='center'>
    </div>
    <h2> oh look, you've made it to the home page</h2>
    <div class='grid-container' id='commission-showcase'>
      <ul id='comm-cards'>
        <li v-for="card in cards" :key='card.username'>
          <commission-card
            v-bind:username='card.username'
            v-bind:price='card.price'
            v-bind:details='card.details'></commission-card>   
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CommissionCard from '/src/components/CommissionCard.vue'
export default {
  data(){
    return{
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
        this.cards = response.data
        console.log(this.cards)
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

ul{
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 1200px;
}

ul li{
  width: 300px;
  float: left;
}
</style>