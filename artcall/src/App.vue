<template>
  <div id="app">
     <nav>
      <div>
        <router-link to='/'>Home</router-link> | 
        <p>Home page</p>
      </div>
      <div id='account-login'>
        <router-link to='/profile'>Profile</router-link>
        <button class='accounts'>Sign up</button>
        <button class='accounts'>Login</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
a{
  display: inline-block;
}
</style>