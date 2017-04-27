<template>
  <div>
    <header-nav></header-nav>
    <div class="breadcrumb">
      <span>首页</span>
      /
      <span>{{ flag }}</span>
      <span>{{$route.flag}}</span>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import Header from '@/components/header'

  /*
  * in-out: 新元素先进行过渡，完成之后当前元素过渡离开。
   out-in: 当前元素先进行过渡，完成之后新元素过渡进入。
  * */

  let flags = {
    'project': '我的项目',
    code: '工作台',
    doc: '文档'
  }

  export default {
    data () {
      return {
        flag: flags[this.$route.path.slice(1)]
      }
    },
    name: 'search',
    components: {
      'header-nav': Header
    },
    watch: {
      '$route' () {
        this.flag = flags[this.$route.path.slice(1)]
      }
    }
  }
</script>
<style>


</style>
