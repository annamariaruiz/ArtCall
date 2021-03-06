<template>
  <div id=commissionPage>
    <div id='left'>
      <img id='preview' src='../assets/images/home-painting.jpg' alt='placeholder'>
      <h2> Starting Price </h2>
      <p> {{card.price}} </p>
      <h2> Artist Details </h2>
      <p> {{card.details}} </p>
    </div>
    <div id='right'>
      <div id='artistPreview'>
        <profile-preview
          v-bind:username='card.username'>
        </profile-preview>
      </div>
      <div id='commRequest'>
        <form @sumbit.prevent='handleSubmitForm'>
          <input type='text' id='commUsername' v-model='commission.commUsername' placeholder='username' required><br>
          <input type='text' id='commPrice' v-model='commission.commPrice' placeholder='price' required><br>
          <input type='text' id='commDetails' v-model='commission.commDetails' placeholder='details' required><br>
          <input type='submit' value='Request'>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProfilePreview from '/src/components/ProfilePreview.vue'
export default {
  data(){
    return{
      commission: {
        commUsername: 'username',
        commPrice: 'price',
        commDetails: 'details'
      },
      card: {
        username:'',
        price:'',
        details:'',
        id: ''
      },
    }
  },
  props: {
    commUsername: String,
    commPrice: String,
    commDetails: String
  },
  name: 'login',
  methods:{
  handleSubmitForm() {
      console.log(this.card)
      axios.post('http://localhost:3000/users', 
      this.commission
      ).then(() => {
        this.$router.push('/')
        this.commission = {
          commUsername:'',
          commPrice:'',
          commDetails:''
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    this.id = this.$route.params.id
    axios.get('http://localhost:3000/cards/' + this.id)
      .then((response) => {
        this.card = response.data
      })
  },
  components: {
    'profile-preview': ProfilePreview
  }
}
</script>

<style>
#preview{
  max-width: 700px;
}

#commissionPage{
  width: 80%;
  height: 600px;
  justify-content: center;
  margin: auto;
  padding: 10px
}

#left{
  width: 70%;
  height: 600px;
  float: left;
}

#right{
  margin: 25px;
}
</style>