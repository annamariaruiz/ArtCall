<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>user
      </div>
      <input type="text" placeholder="Enter username..." v-model="user.username" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="info circle icon"></i> Details
      </div>
      <input type="text" placeholder="Enter email" v-model="user.email" />
    </div>

    

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'user-form',
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {
        return {
          username: '',
          email: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.user.username === '' || this.user.email === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.user);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>