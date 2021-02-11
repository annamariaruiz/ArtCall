<template>
  <div if='home'>
    <div id='center'>
      <div id=image>
        <img src='../assets/images/home-painting.jpg' alt='painting of woods'>
      </div>
      <div id='callToAction'>
        <h2>Let's Begin!</h2>
        <!-- <div class='callToActionButton' id='join'><p>Join the Community</p></div>
        <div class='callToActionButton' id='createComm'><p>Promote Yourself</p></div> -->
      </div>
    </div>
    <div class='grid-container' id='commission-showcase'>
      <ul id='comm-cards'>
        <li v-for="card in cards" :key='card.username'>
          <commission-card
            v-bind:username='card.username'
            v-bind:price='card.price'
            v-bind:details='card.details'
            v-bind:_id='card._id'></commission-card>   
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
#center{
  background: #ff4805;
  width: 80%;
  height: 580px;
  justify-content: center;
  margin: auto;
  padding: 10px
}

#image{
  width: 70%;
  height: 500px;
  float: left;
}

#callToAction{
  margin: 25px;
  height: 600px;
}

.callToActionButton{
  height: 60px;
  /* width: 10px; */
  padding: 15px;
  margin: 5px;
  border: 1px solid #C5CBE3;
}

img{
  width: 70%;
  margin: 25px;
  align-content: center;
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