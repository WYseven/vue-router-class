<template>
  <div>
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '@/components/header'

  export default {
    name: 'search',
    components: {
      'header-nav': Header
    },
    data () {
      return {}
    }
  }
</script>
<style>

</style>
