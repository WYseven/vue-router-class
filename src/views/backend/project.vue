<template>
  <div class="project">
    <div class="add-project-box">
      <i class='fa fa-plus-square'></i>
      <span>创建项目</span>
    </div>
    <div class="content-box">
      <div class="block-content">
          这是我的项目页面
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Project',
    data () {
      return {}
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token') !== 'true') {
          vm.$router.push({
            path: '/login'
          })
        }
      })
    }
  }
</script>
<style>

</style>
