<template>
  <div if='home'>
    <div id='center'>
      <div id=image>
        <img src='../assets/images/home-painting.jpg' alt='painting of woods'>
      </div>
      <div id='callToAction'>
        <h2>Let's Begin!</h2>
          <router-link to='login'>
            <div class='callToActionButton' id='join'>
              <p>Join the Community</p>
            </div>
          </router-link>
          <router-link to='/commission/new'>
          <div class='callToActionButton' id='createComm'><p>Promote Yourself</p></div>
          </router-link>
      </div>
    </div>
    <div class='grid-container' id='commission-showcase'>
      <form @submit.prevent='filter'>
        <label for='artStyle'> Art Styles </label>
        <select id='artStyle' name='artStyle'>
          <option value='realistic'>Realistic</option>
          <option value='abstract'>Abstract</option>
          <option value='vector-art'>Vector art</option>
          <option value='stencil'>Stencil</option>
          <option value='pixel'>Pixel</option>
        </select>
        <label for='search'> Search </label>
        <input type='text' name='search'>
        <input type='submit'>
      </form>
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
      cards: [],
      artStyles: []
    }
  },
  name: 'home',
  methods: {
    filter(){
      
    }
  },
  components: {
    'commission-card': CommissionCard
  },
  created() {
    axios.get('http://localhost:3000/cards')
      .then((response) => {
        this.cards = response.data
      })
  }
}
</script>

<style>
#center{
  background: #ff4805;
  height: 580px;
  justify-content: center;
  display: flex;
  padding: 5px;
  margin: 0px 0px 25px 0px;
  width: 99.4%;
}

#commission-showcase{
  width: 1800px;

}

#callToAction{
  margin: 25px;
  height: 600px;
  width: 200px;
}

.callToActionButton{
  height: 70px;
  padding: 5px;
  margin: 5px;
  font-size: 22px;
  background-color: #4056A1;
}

img{
  height: 580px;
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