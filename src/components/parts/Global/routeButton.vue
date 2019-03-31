<template>
  <button @click="onClickLink">{{ text }}</button>

</template>

<script>
export default {
  
props:['routeName','text'],
  methods:{
    onClickLink: function(){
      this.$router.push({ path:'contact'});
    }
  }
}
</script>

<style scoped>
button{
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: noen;
  color: tomato;
  border: solid 2px tomato;
  border-radius: 30px;
  transition: .4s;
  width: 100%;
  max-width: 120px;
}

button:hover{
  background: tomato;
  color: white;
}
</style>
