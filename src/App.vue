<template>
  <b-container class="px-0" id="app">
      <c-navbar></c-navbar>
      <router-view/>
  </b-container>
</template>

<script>
import Navbar from '@/shared/Navbar'
export default {
  name: 'App',
  components: {
    'c-navbar': Navbar
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}
body {
  background: #fff url("/static/bg.jpg")
    no-repeat !important;
  background-attachment: fixed !important;
  background-size: cover !important;
  min-height: 100vh;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d2926;
  background: #fdfdfd;
}
.selector-for-some-widget {
  box-sizing: content-box;
}
</style>
