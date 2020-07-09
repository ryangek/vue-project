// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin, LayoutPlugin } from 'bootstrap-vue'

// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './App.css'

// HTTP Requests
import VueAxios from 'vue-axios'
import axios from 'axios'

// Store and State
import store from './store'

// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
Vue.use(LayoutPlugin)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// HTTP Request plugin
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
})
