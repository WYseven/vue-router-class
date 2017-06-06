// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import { sync } from 'vuex-router-sync'

import {MessageBox, Message} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

sync(store, router)

Vue.use(VueAxios, axios)

require('./assets/css/app.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
