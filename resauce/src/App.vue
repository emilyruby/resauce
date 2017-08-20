<template>
  <div id="app">
    <MainPage :resources="this.resources"></MainPage>
  </div>
</template>

<script>
import MainPage from '@/components/MainPage.vue'
import db from '@/db_config.js'

export default {
  name: 'app',
  components: {
    MainPage
  },
  firebase: {
    resources: db.db.ref('resources')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
