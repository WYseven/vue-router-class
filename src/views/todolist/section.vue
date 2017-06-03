<template>
  <section class="main">
    <input type="checkbox" class="toggle-all" v-model='isSelectedAll' > 
    <ul class="todo-list">
      <item v-for="item in todos" key="itm.id" :todo="item"></item>
    </ul>
  </section>
</template>
<script>
  import item from './item'
  
  export default {
    watch: {
      $route () {
        this.$store.commit('filterTodo')
      }
    },
    components: {
      item
    },
    computed: {
      isSelectedAll: {
        get () {
          return this.$store.getters.isSelectedAll
        },
        set (value) {
          this.$store.commit('toggleTodos', value)
        }
      },
      todos () {
        return this.$store.getters.filterTodos
      }
    },
    created () {
      this.$store.dispatch('getTodos').then(() => {
        // this.$store.state.todos
        this.$store.commit('clearSelectedTodo')
      })
    }
  }
</script>
<style src='@/assets/css/todolist.css' scoped>

</style>
