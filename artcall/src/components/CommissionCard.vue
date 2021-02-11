<template>
    <a href='commission/{{_id}}'>
    <div class='commCard'>
      <img id='commission-thumbnail'>
      <div id='commission-details'>
        <h4> {{price}} </h4>
        <p> {{details}} </p>
        {{username}}
        <!-- <router-link :to="{ path: '/profile/ + username', params: {username: username } }">{{username}}</router-link> -->
      </div>
      <div>
        <router-link to='/commissions/{{id}}'></router-link>
        <h3>Commission Me!</h3>
      </div>
    </div>
    </a>
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
  height: 450px;
  width: 220px;
  padding: 15px;
  margin: 15px;
  background-color: #C5CBE3;
  border: 2px solid #D79922;
}
#commission-thumbnail{
  width: 175px;
  height: 150px;
}
</style>