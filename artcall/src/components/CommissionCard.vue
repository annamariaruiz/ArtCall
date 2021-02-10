<template>
    <a href='commission/{{_id}}'>
    <div class='commCard'>
      <img id='commission-thumbnail'>
      <div id='commission-details'>
        <h4> {{price}} </h4>
        <p> {{details}} </p>
        <a href='profile/{{username}}'><p> {{username}} </p></a>
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