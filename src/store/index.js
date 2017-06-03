import Vue from 'vue'
import Vuex from 'vuex'
import utils from './utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [],
    editId: '',
    hash: 'all'
  },
  getters: {
    computedCount: state => {
      return state.count > 10 ? 10 : state.count
    },
    isSelectedAll (state) {
      return state.todos.filter((item) => item.isSelected).length === state.todos.length
    },
    unSelectedLen (state) {  // 未选中条数
      return state.todos.filter((item) => !item.isSelected).length
    },
    SelectedLen (state, getters) {  // 选中条数
      return state.todos.length - getters.unSelectedLen
    },
    filterTodos (state) {
      let filter = {
        all: (todos) => todos,
        active: (todos) => todos.filter((item) => !item.isSelected),
        completed: (todos) => todos.filter((item) => item.isSelected)
      }
      console.log(state.hash, state.todos)
      return filter[state.hash](state.todos)
    }
  },
  mutations: {
    add (state) {
      state.count++
    },
    setTodos (state, todos) {
      state.todos = todos
    },
    addTodo (state, todo) {  // 添加一项
      state.todos.push({
        title: todo.title,
        id: Math.random(),
        isSelected: false
      })
    },
    toggleTodos (state, value) { // 切换全选和不全选
      state.todos.forEach((item) => {
        item.isSelected = value
      })
    },
    delectTodo (state, id) { // 删除一项
      let index = state.todos.findIndex((item) => {
        return item.id === id
      })
      state.todos.splice(index, 1)
    },
    editTodoId (state, id) {  // 要编辑数据的id
      state.editId = id
    },
    clearSelectedTodo (state) { // 清除选中的项
      state.todos = state.todos.filter((item) => {
        return !item.isSelected
      })
    },
    filterTodo (state) {
      /* let filter = {
        all: (todos) => todos,
        active: (todos) => todos.filter((item) => !item.isSelected),
        completed: (todos) => todos.filter((item) => item.isSelected)
      }
      state.todos = filter[state.route.hash.slice(2)](state.todos) */
      console.log(state.route.hash.slice(2))
      state.hash = state.route.hash.slice(2)
    }
  },
  actions: {
    actionAdd (store) {
      setTimeout(() => {
        store.commit('add')
      }, 1000)
    },
    async getTodos ({commit}) {  // 异步获取数据
      let todos = utils.fetch('miaov')
      todos.then((data) => {
        commit('setTodos', data)
      })
    }
  }
})

export default store
