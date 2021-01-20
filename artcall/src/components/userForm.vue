<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>user
      </div>
      <input type="text" placeholder="Enter user..." v-model="user.user1" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="info circle icon"></i> Details
      </div>
      <input type="text" placeholder="Enter Details" v-model="user.user2" />
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
          user1: '',
          user2: ''
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
      if (this.user.user1 === '' || this.user.user2 === '') {
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