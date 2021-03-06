<template>
  <div id=commissionPage>
    <form @sumbit.prevent='handleSubmitForm'>
    <div id='left'>
      <img id='preview' src='../assets/images/home-painting.jpg' alt='placeholder'>
      
      <input type="file" @change="onFileChanged">
      <button @click="onUpload">Upload!</button>

      <h2> Starting Price </h2>
      <input type='text' id='commPrice' v-model='card.price' placeholder='price' required><br>

      <h2> Artist Details </h2>
      <input type='text' id='commDetails' v-model='card.details' placeholder='details' required><br>

    </div>
    <div id='right'>
      <div id='tags'>
        <input type='checkbox' name='realistic'><label for='realistic'> Realistic </label><br>
        <input type='checkbox' name='abstrast'><label for='abstract'> Abstract </label><br>
        <input type='checkbox' name='vector-art'><label for='vector-art'> Vector art </label><br>
        <input type='checkbox' name='stencil'><label for='stencil'> Stencil </label><br>
        <input type='checkbox' name='pixel'><label for='pixel'> Pixel </label><br>
      </div>
    </div>
    <input type='submit' Value='Create Commission'>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      card: {
        username:'',
        price:'',
        details:'',
        photo:'',
        _id: ''
      },
    }
  },
  props: {

  },
  name: 'login',
  methods:{
    handleSubmitForm() {
      console.log(this.card)
      axios.post('http://localhost:3000/cards',
      this.card
      ).then(() => {
        this.$router.push('/profile/' + this.username)
        console.log(this.card)
        this.card = {
          username:'',
          price:'',
          details:'',
          photo:'',
          _id: ''  
        }
      })
    },
    onFileChanged() {

    },
    onUpload(){

    }
  },
  created() {
    
  },
  components: {

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