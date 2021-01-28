<template>
  <div>
    <nav>
      <div>
        <router-link to='/'><h1>Home</h1></router-link> 
      </div>
      <div id='account-login'>
        <router-link to='/profile'>
          <div>
            Profile
          </div>
        </router-link>
        <router-link to='login'>
          <div class='login'>
            Sign up
          </div>
        </router-link>
        <router-link to='login'>
          <div class='login'>
            Login
          </div>
        </router-link>
      </div>
    </nav>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
html{
  background-color: #c6dabf;
}
nav{
  height: 70px;
  background-color: #1a936f;
  padding: 15px;
  display: flex
}
#account-login{
  
}
</style>