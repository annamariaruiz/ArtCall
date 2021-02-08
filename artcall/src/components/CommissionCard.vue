<template>
  <div class='commCard'>
    <img id='commission-thumbnail'>
    <div id='commission-details'>
      <h4> {{price}} </h4>
      <p> {{details}} </p>
      <p> {{username}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commission-card',
  props: {
    username: String,
    price: String,
    details: String
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
  padding: 25px;
  margin: 10px;
  background-color: #f3e9d2;
  border: 2px solid #114b5f;
}
#commission-thumbnail{
  width: 195px;
  height: 150px;
}
</style>