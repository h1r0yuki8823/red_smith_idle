<template>
  <header class="page-header wrapper">
    <h1>Red Smith</h1>
    <nav>
      <ul class="main-nav">
        <li>About</li>
        <li>Member</li>
        <li>Info</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather');

.page-header{
  font-family: 'Merriweather', serif; 
  display:flex;
  justify-content: space-between;
}

.main-nav{
  display: flex;
  font-size: 1.25rem;
  text-transform: uppercase;
  margin-top: 34px;
  list-style: none;
}

.main-nav li{
  margin-left: 36px;
  text-decoration: none;
}

.wrapper{
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
}

</style>
