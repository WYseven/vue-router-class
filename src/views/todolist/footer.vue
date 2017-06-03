<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{$store.getters.unSelectedLen}}</strong> items left
		</span> 
    <ul class="filters">
      <li><a href="#/all" class="selected">All</a></li> 
      <li><a href="#/active" class="">Active</a></li>
      <li><a href="#/completed" class="">Completed</a></li>
    </ul> 
    <button class="clear-completed" v-show='$store.getters.SelectedLen' @click="clearSelectedTodo">
      Clear completed
    </button>
  </footer>
</template>

<script>
export default {
  methods: {
    clearSelectedTodo () {
      this.$store.commit('clearSelectedTodo')
    }
  }
}
</script>
<style src='@/assets/css/todolist.css' scoped>

</style>
