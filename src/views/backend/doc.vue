<template>
  <div class="doc">
    <div class="doc-nav">
      <ul class="main-menu">
        <li>
          <router-link to="/doc?install">安装</router-link>
        </li>
        <li>
          <router-link :to="{path:'/doc',query: {id:null}}">介绍</router-link>
        </li>
        <li>
          <router-link :to="{path:'/doc/base'}">基础</router-link>
          <ul class="nav-dropdown">
            <li>
              <router-link :to="{path:'#start'}>开始</router-link>
            </li>
            <li>
              <router-link to="#dongtai">动态路由</router-link>
            </li>
            <li>
              <router-link to="#haxiqiantao">嵌套路由</router-link>
            </li>
          </ul>
        </li>
        <li>
          <span>进阶</span>
          <ul class="nav-dropdown">
            <li>
              <a href="">导航钩子</a>
            </li>
            <li>
              <a href="">路由元信息</a>
            </li>
            <li>
              <a href="">过渡动效</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="doc-view">
      <p>search值为：{{ $route.query }}</p>
      <p>参数值：{{ $route.params.block }}</p>
      <p>has值为：{{ $route.hash }}</p>
      <p>路有名字：{{ $route.name }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Doc',
    data () {
      return {}
    }
  }
</script>
<style>

</style>
