<template>
  <b-row class="px-md-2 pb-4">
    <b-col class="mx-auto" md="10">
      <h4 v-b-modal.modal-cart>ตะกร้า: {{  $store.state.cartCount }}</h4>
    </b-col>
    <b-col class="pt-4" md="6" v-for="(menu, idx) in $store.state.menus" :key="menu.ItemID">
      <c-card :idx="idx" :title="menu.ItemName" :description="menu.Description" :price="menu.Price" :image="menu.ImageName"></c-card>
    </b-col>
    <b-modal id="modal-cart" title="ตะกร้า">
      <template v-slot:default="{ }">
        <c-cart-item :idxItem="idx" v-for="(cart, idx) in $store.state.cart" :key="cart.ItemID"></c-cart-item>
      </template>
      <template v-slot:modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="secondary" @click="cancel()">
          ยกเลิก
        </b-button>
        <b-button size="sm" variant="danger" @click="ok()">
          สั่งซื้อ
        </b-button>
    </template>
    </b-modal>
  </b-row>
</template>

<script>
import Card from '@/components/Card'
import CartItem from '@/components/CartItem'
// import Axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'c-card': Card,
    'c-cart-item': CartItem
  },
  created: function () {
    this.getMenus()
  },
  methods: {
    getMenus: function () {
      // this.menus = (await Axios.get('https://www.kfc.co.th/menu/GetItems?categoryID=CAT1'))['data']['DataObject']['MenuData']['SelectedCategory']['SubCategories'][0]['Items']
      // this.menus = (await Axios.get('/static/jsons/menus.json'))['data']['DataObject']['MenuData']['SelectedCategory']['SubCategories'][0]['Items']
      this.$store.commit('fetchMenu')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    font-family: "Prompt", sans-serif;
    cursor: pointer;
  }
</style>
