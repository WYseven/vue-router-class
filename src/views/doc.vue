<template>
  <div>
    <div class="doc-nav">
      <ul class="main-menu">
        <li>
          <router-link to="/doc?install">安装</router-link>
        </li>
        <li>
          <router-link :to="{path:'/doc',params: {id:'a'}}">介绍</router-link>
        </li>
        <li>
          <router-link :to="{path:'/doc/base'}">基础</router-link>
          <ul class="nav-dropdown">
            <li>
              <router-link to="#start">开始</router-link>
            </li>
            <li>
              <router-link to="#dongtai">动态路由</router-link>
            </li>
            <li>
              <router-link to="#haha">嵌套路由</router-link>
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
      hello
      <p>{{ $route.query }}</p>
      <p>{{ $route.params.block }}</p>
      <p>{{ $route.params.hash }}</p>
      <p>{{ $route.name }}</p>
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
