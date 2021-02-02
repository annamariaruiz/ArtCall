<template>
  <div if='home'>
    <div id='center'>
    </div>
    <h1> oh look, you've made it to the home page</h1>
    <div class='grid-container' id='commission-showcase'>
      <div class='grid-row'>
        <commission-card></commission-card>
        <commission-card></commission-card>
        <commission-card></commission-card>

      </div>
      <div class='grid-row'>
        <commission-card></commission-card>
        <commission-card></commission-card>
        <commission-card></commission-card>

      </div>
      <div class='grid-row'>
        <commission-card></commission-card>
        <commission-card></commission-card>
        <commission-card></commission-card>

      </div>
    </div>
  </div>
</template>

<script>
import CommissionCard from '/src/components/CommissionCard.vue'
export default {
  name: 'home',
  components: {
    'commission-card': CommissionCard
  }
}
</script>

<style>
.grid-container{
  display: grid;
}
.grid-row{
  display: inline-block;
}
</style>