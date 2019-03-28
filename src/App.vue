<template>
  <div id="app">
    <app-header></app-header>
      <router-view />
      
  </div>
</template>

<script>
import Header from './components/global/header'


export default {
  
  components: {
    'app-header':Header
  }
}
</script>

<style>
html{
  font-size: 100%;
}
</style>

