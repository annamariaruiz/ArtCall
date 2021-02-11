<template>
  <div>
    <nav>
      <ul>
        <li class=navLinks id='navHome'><router-link to='/'>ArtCall</router-link> </li>
        <li class=navLinks id='navProfile'><router-link to='/profile/:id'> Profile</router-link></li>
        <li class=navLinks id='navSignup'><router-link to='login'>Sign up</router-link></li>
        <li class=navLinks id='navLogin'><router-link to='login'>Login</router-link></li>
      </ul>
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
  background-color: #f5eeda;
}
nav{
  height: 60px;
  width: 98%;
  background-color: #4056A1;
  padding: 10px;
  margin: 0px;
  display: inline-block;
  overflow-y: auto;
}

ul{
  list-style-type: none;
  margin: 5px;
  padding: 10px;
}

a{
  text-decoration: none;
}

.navLinks{
  padding: 10px 0px 0px 0px;
  text-align: center;
}

#navLogin, #navSignup, #navProfile{
  float: right;
  width: 80px;
  height: 30px;
  font-size: 19px;
  margin: 15px 10px 0px 10px;
  background-color: #C5CBE3;
  border: 2px solid #D79922;
  color: black
}

#navHome{
  width: 100px;
  height: 50px;
  margin: 5px 25px;
  font-size: 32px;
  color: #F13C20;
}
</style>