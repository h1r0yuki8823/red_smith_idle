<template>
  <div class="memberCard"> 
    <img :src="src"/>
    <p class="nameLabel">Name: {{ name }}</p>
    <p class="ageLabel">Age: {{ age }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'src', 'age']
  
}
</script>

<style scoped>
.memberCard{
  float: left;
  width: 25%;
}

.nameLabel{
  color:red;
}

.ageLabel{
  color: red;
}

img{
  width: 150px;
  height: 150px;
}


@media screen and (max-width: 480px) {
  .memberCard{
    width:  50%;
  }

  img{
    width: 100px;
    height: 100px;
  }
}


</style>