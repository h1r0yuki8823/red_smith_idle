<template>
  <div id="app">
    <app-header></app-header>
    <Top/>
  </div>
</template>

<script>
import Header from './components/global/header'
import Top from './components/pages/top'

export default {

  components: {
    'app-header':Header,
    'Top':Top
  }
}
</script>

<style>
html{
  font-size: 100%;
}
</style>
