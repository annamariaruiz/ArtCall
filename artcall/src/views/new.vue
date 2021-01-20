<template>
  <div>
    <h1>New user</h1>
    <user-form @createOrUpdate="createOrUpdate"></user-form>
  </div>
</template>

<script>
import userForm from '../components/userForm.vue';
import { api } from '../helpers/helpers';
export default {
  name: 'new-user',
  components: {
    'user-form': userForm
  },
  methods: {
    createOrUpdate: async function(user) {
      const res = await api.createuser(user);
      this.flash('user created', 'success');
      this.$router.push(`/users/${res._id}`);
    }
  }
};
</script>