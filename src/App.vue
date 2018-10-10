<template>
  <div id="app">
    <router-view/>
    <navView></navView>
  </div>
</template>

<script>
  import '@/assets/style/common.css'
  import navView from "./templates/Navigation.vue"
  export default {
    name: 'App',
    components:{
      navView
    }
  }
</script>

<style>
</style>
