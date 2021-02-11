<template>
  <div id=commissionPage>
    <div id='left'>
      <img id='preview' src='../assets/images/home-painting.jpg' alt='placeholder'>
      <h2> Starting Price </h2>
      <p> {{startingPrice}} </p>
      <h2> Artist Details </h2>
      <p> {{artistDetails}} </p>
    </div>
    <div id='right'>
      <div id='artistPreview'>
        <profile-preview></profile-preview>
      </div>
      <div id='commRequest'>
        <form @sumbit.prevent='handleSubmitForm'>
          <input type='text' id='username' v-model='commission.username' placeholder='username' required><br>
          <input type='text' id='price' v-model='commission.price' placeholder='price' required><br>
          <input type='text' id='details' v-model='commission.details' placeholder='details' required><br>
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
        username:'',
        artist: this.artist,
        price:'',
        details:''
      }
    }
  },
  props: {
    artist: String,
    startingPrice: String,
    artistDetails: String,
    commId: String
  },
  name: 'login',
  methods:{
  handleSubmitForm() {
      console.log(this.commission)
      axios.post('http://localhost:3000/users', 
      this.commission
      ).then(() => {
        this.$router.push('/')
        this.commission = {
          username:'',
          artist:'',
          price:'',
          details:''
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    console.log(this.artist)
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