
import Vue from 'vue'
import Vuex from 'vuex'
import { cartActions, cartMutations, cartState } from './Cart'
import { countMutations, countState } from './Count'
import { menuMutations, menuState } from './Menu'

// This imports state plugin
Vue.use(Vuex)

export default new Vuex.Store({
  state: Object.assign({}, countState, menuState, cartState),
  mutations: Object.assign({}, countMutations, menuMutations, cartMutations),
  actions: Object.assign({}, cartActions)
})
