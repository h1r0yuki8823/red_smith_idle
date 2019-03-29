<template>
  <div class="top-content wrapper">
    <div class="top-label">
      <p class="subLabel1">MEN'S IDLE UNIT</p>
      <h2 class="mainLabel">RED SMITH</h2>
      <p class="subLabel2">メンバー募集中</p>
    </div>
    <div>
      <route-button text="応募する" routeName="contact" />
    </div>
  </div>
</template>

<script>
import routeButton from '../parts/Global/routeButton'
export default {
  components:{
    'route-button':routeButton
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

.top-content{
  font-family: 'Josefin Sans', sans-serif;
  overflow: hidden;
  background-color: black;
}

.top-content p {
  font-size: 1.125rem;
  margin: 10px 0 42px;
}

.mainLabel{
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: normal;
}

.top-label{
  margin-top: 10%;
}

.top-label h2{
  color: tomato;
}

.top-content p{
  color: snow;
  font-size: 2rem;
}
</style>

