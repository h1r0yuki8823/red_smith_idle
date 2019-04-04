<template>
  <div class="top-content wrapper">
    <div class="top-label">
      <p class="subLabel1">MEN'S IDLE UNIT</p>
      <h2 class="mainLabel">RED SMITH</h2>
      <p class="subLabel2">メンバー募集中</p>
    </div>
    <div class="top-button"> 
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


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

.top-content{
  font-family: 'Josefin Sans', sans-serif;
  overflow: hidden;
  background-color: black;
  display: block;
  min-height: 80vh;
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
  margin-left: 14px;
}

.top-label h2{
  color: tomato;
}

.top-content p{
  color: snow;
  font-size: 2rem;
}

.top-button{
  margin-left: 30px;
  margin-bottom: 20px;
}

@media screen and (max-width:480px) {
  .top-content{
    text-align: center;
    width: 100%;
  }

  .top-label{
  margin-top: 10%;
  
}
}
</style>

