<template>
  <div id='profile'>
    <h1>This is the profile page</h1>
    <p>{{username}}</p>

  </div>
</template>

<script>
export default {
  name: 'profile/:username',
  props: {
    username: String
  },
  created() {
    // const urlParams = new URLSearchParams(window.location.search)
    // console.log(window.location.search)
    // const username = urlParams.get('username')
    // console.log(username)
  }
}
</script>

<style>

</style>