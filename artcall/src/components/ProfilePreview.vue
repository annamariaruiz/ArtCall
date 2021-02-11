<template>
  <div>
    <!-- <h2><router-link :to="{ path: '/profile/ + username', params: {username: username } }">{{username}}</router-link></h2> -->
    <h1>Profile Preview</h1>
  </div>
    
</template>

<script>
export default {
  name: 'commission-card',
  props: {
    username: String,
    price: String,
    details: String,
    _id: String
  },
  data() {
    return {

    }
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