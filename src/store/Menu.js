import Axios from 'axios'

const menuState = {
  menus: []
}

const menuMutations = {
  async fetchMenu (state) {
    state.menus = (await Axios.get('/static/jsons/menus.json'))['data']['DataObject']['MenuData']['SelectedCategory']['SubCategories'][0]['Items']
  }
}

export {
  menuMutations,
  menuState
}
