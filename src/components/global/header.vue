<template>
  <header class="page-header wrapper">
    <h1>Red Smith</h1>
    <nav>
      <ul class="main-nav">
        <!--<li>About</li>
        <li>Member</li>
        <li>Info</li>
        <li>Contact</li>-->
        <router-link to="/"><li><a>Top</a></li></router-link>
        <router-link to="/member"><li><a>Member</a></li></router-link>
        <router-link to="/contact"><li><a>Contact</a></li></router-link>
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
/*
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
*/

.main-nav{
  display: flex;
}

nav ul{
  margin-top: 34px;
  margin-left: 17px;
  margin-right: 17px;
  text-align: center;
}

nav a{
  display: block;
  width: 100%;
  text-decoration: none;
  color: white;
  padding-bottom: 5px;
}

nav li:hover{
  border-bottom: 3px solid  plum;
}

h1{
  color: white;
}

li{
  text-decoration: none;
  list-style-type: none;
}

a{
  margin:0 10px;
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
    margin: 0px;
  }
  
}

</style>
