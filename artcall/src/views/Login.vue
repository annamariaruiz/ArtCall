<template>
  <div>
    <div class='box' id='login'>
      <h3>Log In</h3>
      <form>
        <input type='text' id='loginusername' name='username' placeholder='Username' required><br>
        <input type='password' id='loginpassword' name='password' placeholder='Password' required><br>
        <input type='submit' value='Submit'>
      </form>
    </div>
    <div class='box' id='signup'>
      <h3>Sign Up</h3>
      <form @submit.prevent='handleSubmitForm'>
        <input type='text' id='username' v-model='user.username' placeholder='Username' required><br>
        <input type='email' id='email' v-model='user.email' placeholder='email' required><br>
        <input type='text' id='password' v-model='user.password' placeholder='Password' required><br>
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
      

      // console.log(this.user)
      // axios.post('http://localhost:3000/users', 
      // this.user,
      // { headers: {
      //   'Content-type': 'application/x-www-form-urlencoded'
      // }
      // }).then(() => {
      //   this.$router.push('/')
      //   this.user = {
      //     username:'',
      //     email:'',
      //     password:''
      //   }
      // }).catch(error => {
      //   console.log(error)
      // })
    }
  },
  components: {

  }
}
</script>

<style>

</style>