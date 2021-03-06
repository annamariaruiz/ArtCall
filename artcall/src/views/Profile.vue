<template>
  <div id='profile'>
    <h1>This is the profile page</h1>
    <p>{{username}}</p>
    <p>{{email}}</p>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'profile/:username',
  props: {
  },
  data(){
    return{
      profile:{
        id:'',
        username:'',
        email:''
        
      }
    }
  },
  created() {
    this.username = this.$route.params.id
    axios.get('http://localhost:3000/users/' + this.username)
      .then((response) => {
        this.profile = response.data
        console.log(response.data)
      })
  }
}
</script>

<style>

</style>