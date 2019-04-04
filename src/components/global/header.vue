<template>
  <header class="page-header wrapper">
    <h1>Red Smith</h1>
    <nav>
      <ul class="main-nav">
        <!--<li>About</li>
        <li>Member</li>
        <li>Info</li>
        <li>Contact</li>-->
        <router-link to="/"><li>Top</li></router-link>
        <router-link to="/member"><li>Member</li></router-link>
        <router-link to="/contact"><li>Contact</li></router-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather');

.page-header{
  font-family: 'Merriweather', serif; 
  display:flex;
  justify-content: space-between;
  background-color: tomato;
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



h1{
  color: white;
}

@media screen and (max-width: 480px) {
  h1{
    font-size: 15px;
    line-height: 55px;
    padding: 0 2%;
  }

  .main-nav{
    font-size: 10px;
  }

  .main-nav li{
  margin-left: 18px;
  margin-right: 10px;
  text-decoration: none;
}

  .page-header{
    width: 100%;
  }

  a{
    text-align: right;
  }
  
}

</style>
