<template>
  <div class="main">
    <div class="home-header">
      <img src="../assets/miaov.png" alt="">
      <div class="portrait">
        <span>登录/注册</span>
        <img src="../assets/portrait.png" alt="">
      </div>
    </div>
    <div class="btns">
      <router-link to="/project" tag="div" class=" trans">我的项目</router-link>
      <router-link to="/doc" tag="div" class=" trans">我的文档</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {}
    }
  }
</script>
<style>

</style>
