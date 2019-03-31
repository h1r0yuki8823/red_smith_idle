<template>
  <div id="app">
    <app-header></app-header>
      <router-view />    
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/global/header'
import Footer from './components/global/footer'

export default {
  
  components: {
    'app-header':Header,
    'app-footer':Footer
  }
}
</script>

<style>

html{
  font-size: 100%;
}
</style>

