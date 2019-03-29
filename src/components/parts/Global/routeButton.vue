<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  
props:['routeName','text'],
  methods:{
    router: function(event){
      router.push({ path: this.routeName})
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
}

button:hover{
  background: tomato;
  color: white;
}
</style>
