<template>
  <div class="members">
    <h2>MEMBER</h2>
    <h3>メンバー</h3>
    <member-card name="sample" src="https://prog-8.com/images/html/advanced/php.png" age="20"></member-card>
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
.members{
  /*
  margin-top: 65px;
  height: 500px;
  background-color: black; */
  text-align: center;
}
</style>