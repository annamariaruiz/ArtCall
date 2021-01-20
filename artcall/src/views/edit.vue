<template>
  <div>
    <h1>Edit user</h1>
    <user-form @createOrUpdate="createOrUpdate" :user=this.user></user-form>
  </div>
</template>

<script>
import userForm from '../components/userForm.vue';
import { api } from '../helpers/Helpers';

export default {
  name: 'edit',
  components: {
    'user-form': userForm
  },
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    createOrUpdate: async function(user) {
      await api.updateuser(user);
      this.flash('user updated sucessfully!', 'success');
      this.$router.push(`/users/${user._id}`);
    }
  },
  async mounted() {
    this.user = await api.getuser(this.$route.params.id);
  }
};
</script>