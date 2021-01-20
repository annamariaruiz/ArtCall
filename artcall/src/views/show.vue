<template>
  <div>
    <h1>Show user</h1>

   
    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="users icon"></i>  user
      </div>
      <input type="text" readonly  :value="user.username"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="info circle icon"></i> Details
      </div>
      <input type="text" readonly  :value="user.email"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit user
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/Helpers';
export default {
  name: 'show',
  data() {
    return {
      user: ''
    };
  },
  async mounted() {
    this.user = await api.getuser(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>