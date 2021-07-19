<template>
  <div id="app">
    <app-header/>
    <reports />
    <app-footer/>

    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/HeaderNav.vue'
import Reports from './components/Reports.vue'
import AppFooter from './components/FooterNav.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    Reports,
    AppFooter
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
}

main {
  flex: 1;
}
</style>
