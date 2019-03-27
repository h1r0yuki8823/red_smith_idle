<template>
  <div id="app">
    <app-header></app-header>
      <router-view />
      
  </div>
</template>

<script>
import Header from './components/global/header'
import Top from './components/pages/top'
import Member from './components/pages/member'

export default {
  
  components: {
    'app-header':Header,
    'page-top':Top,
    'page-member':Member
  }
}
</script>

<style>
html{
  font-size: 100%;
}
</style>

