<template>
  <li class="todo" :class="{completed: todo.isSelected, editing: editingId === todo.id}">
    <div class="view">  
      <input type="checkbox" class="toggle" v-model='todo.isSelected' /> 
      <label @dblclick="edtorTodo(todo.id)">{{todo.title}}</label> 
      <button class="destroy" @click='delectTodo(todo.id)'></button>
    </div> 
    <input 
      type="text" 
      ref='editInput' 
      class="edit" 
      v-model="todo.title" 
      @blur='editDone'
      @keyup.13='editDone'
      @keyup.esc='cancelEdit'
    >
  </li>
</template>
<script>
  export default {
    data () {
      return {
        editBeforeTtitle: ''
      }
    },
    props: {
      todo: {
        default: {},
        required: true
      }
    },
    computed: {
      editingId () {
        return this.$store.state.editId
      }
    },
    methods: {
      delectTodo (id) {
        this.$store.commit('delectTodo', id)
      },
      edtorTodo (id) {
        this.$store.commit('editTodoId', id)
        this.$nextTick(() => {
          this.$refs.editInput.focus()
        })
        this.editBeforeTtitle = this.$refs.editInput.value
      },
      editDone () {
        this.$store.commit('editTodoId', '')
      },
      cancelEdit () {
        this.todo.title = this.editBeforeTtitle
        this.editBeforeTtitle = ''
        this.$store.commit('editTodoId', '')
      }
    }
  }
</script>
<style src='@/assets/css/todolist.css' scoped>

</style>
