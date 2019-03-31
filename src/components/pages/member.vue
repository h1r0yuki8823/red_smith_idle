<template>
  <div class="members">
    <h2>MEMBER</h2>
    <h3>メンバー</h3>
    <member-card name="sample1" src="https://prog-8.com/images/html/advanced/php.png" age="??"></member-card>
    <member-card name="sample2" src="https://prog-8.com/images/html/advanced/php.png" age="??"></member-card>
    <member-card name="sample3" src="https://prog-8.com/images/html/advanced/php.png" age="??"></member-card>
    <member-card name="sample4" src="https://prog-8.com/images/html/advanced/php.png" age="??"></member-card>
  </div>
</template>

<script>
import MemberCard from '../parts/Member/memberCard'

export default {
  components:{
    'member-card': MemberCard
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

.members{
  font-family: 'Josefin Sans', sans-serif;
  overflow: hidden;
  background-color: black;
  min-height: 80vh;
  text-align: center;
}
</style>