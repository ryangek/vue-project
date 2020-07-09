<template>
  <b-navbar toggleable="md" type="light" variant="faded">
    <b-navbar-brand href="#">AFK</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BNavbar, BNavbarBrand, BNavbarToggle, BIcon, BCollapse, BNavbarNav } from 'bootstrap-vue'
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'b-navbar': BNavbar,
    'b-navbar-brand': BNavbarBrand,
    'b-navbar-toggle': BNavbarToggle,
    'b-icon': BIcon,
    'b-collapse': BCollapse,
    'b-navbar-nav': BNavbarNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
