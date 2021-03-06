<template>
  <div>
    <!-- <router-link path: "/profile/" + username> -->
    <h1>Profile Preview</h1>
    <h4>{{username}}</h4>
    <!-- </router-link> -->
  </div>
    
</template>

<script>
// import axios from 'axios'
export default {
  name: 'profile-preview',
  data() {
    return {
      // profile: {
      //   username: ''
      // }
    }
  },
  props: {
    username: String,
    price: String,
    details: String,
    id: String
  },
  created(){
    // this.username = this.$route.params.username

    // axios.get('http://localhost:3000/users/' + this.profileid)
    //   .then((response) => {
    //     this.profile = response.data
    //   })
  },
  methods: {
    
  }
}
</script>

<style>
.commCard{
  height: 300px;
  width: 200px;
  padding: 35px;
  margin: 5px;
  background-color: #C5CBE3;
  border: 2px solid #D79922;
}
#commission-thumbnail{
  width: 195px;
  height: 150px;
}
</style>