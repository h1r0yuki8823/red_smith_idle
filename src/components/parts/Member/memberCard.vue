<template>
  <div class="memberCard"> 
    <img :src="src" />
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
  color:tomato;
}

.ageLabel{
  color: tomato;
}


</style>