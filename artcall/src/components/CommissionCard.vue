<template>
    <div class='card'>
      <router-link :to=commLink>
      <img id='commission-thumbnail' src='../assets/images/commission_thumbnail.jpg'>
      <div id='commission-details'>
        <h4> ${{price}} </h4>
        <p> {{details}} </p>
        <router-link :to=profLink><p id='username'>{{username}}</p></router-link>
        <div>
          <h3>Commission Me!</h3>
        </div>
      </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'commission-card',
  props: {
    username: String,
    price: String,
    details: String,
    _id: String,
  },
  data() {
    return {
      commLink: '',
      profLink: ''
    }
  },
  created() {
    this.commLink = '/commission/' + this._id
    this.profLink = '/profile/' + this.username
  },
  methods: {
    
  }
}
</script>

<style>
.card{
  height: 340px;
  width: 215px;
  margin: 35px;
  padding: 15px;
  background-color: #C5CBE3;
  border: 2px solid #D79922;
}
#commission-thumbnail{
  float: left;
  margin: 5px;
}
#commission-details{
  padding: 15px 0px 15px 15px;
}
#username{
  font-size: 22px;
}
#username:hover{
  color: #F13C20
}

a{
  color: black;
}
a:hover{
  border: 2px solid #4056A1;
}
</style>