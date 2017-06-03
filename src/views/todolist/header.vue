<template>
  <header class="header">
    <h1>todos</h1>
    <input autofocus="autofocus" 
          autocomplete="off" 
          placeholder="What needs to be done?" 
          class="new-todo"
          v-model='todo'
          @keyup.13="addTodo"
   />
  </header>
</template>
<script>
export default {
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo (ev) {
      if (!this.todo.trim()) return
      this.$store.commit({
        type: 'addTodo',
        title: this.todo
      })

      this.todo = ''
    }
  }
}
</script>
<style src='@/assets/css/todolist.css' scoped>

</style>
