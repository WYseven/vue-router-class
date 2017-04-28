<template>
  <div class="project">
    <div class="block-content">
        这是我的项目页面
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
        vm.$router.push({
          path: '/login'
        })
      })
    }
  }
</script>
<style>

</style>
