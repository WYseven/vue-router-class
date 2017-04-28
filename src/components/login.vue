<template>
  <div class="login">
    <div>
      <form @submit.prevent='sendLogin'>
        <p>用户名：<input type="text" name="user" /></p>
        <p>密码<input type="password" name="password" /></p>
        <input type="submit" value="提交" />
      </form>
        
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {}
    },
    methods: {
      sendLogin (ev) {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>

</style>
