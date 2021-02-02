<template>
  <div>
    <div class='box' id='login'>
      <h3>Log In</h3>
      <form>
        <input type='text' id='username' name='username' placeholder='Username' required><br>
        <input type='password' id='password' name='password' placeholder='Password' required><br>
        <input type='submit' value='Submit'>
      </form>
    </div>
    <div class='box' id='signup'>
      <h3>Sign Up</h3>
      <form @submit.prevent='handleSubmitForm'>
        <input type='text' id='username' v-model='username' placeholder='Username' required><br>
        <input type='email' id='email' v-model='email' placeholder='email' required><br>
        <input type='text' id='password' v-model='password' placeholder='Password' required><br>
        <input type='text' id='repassword' name='repassword' placeholder='Retype Password' required><br>
        <input type='submit' value='Submit'>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      user: {
        username:'',
        email:'',
        password:''
      }
    }
  },
  name: 'login',
  methods:{
    handleSubmitForm() {
      let apiURL = 'http://localhost:3000/users';
      axios.post(apiURL, this.user).then(() => {
        this.$router.push('/')
        this.user = {
          username:'',
          email:'',
          password:''
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
  components: {

  }
}
</script>

<style>

</style>