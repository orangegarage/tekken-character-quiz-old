<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/quiz">Take the Quiz</router-link>
    </nav>
    <transition
      name = "fade"
      mode = "out-in">
    <router-view/>
    </transition>
  </div>
</template>


<style>

.fade-enter-active,
.fade-leave-active{
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function:  ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

body {
  background-color: #696969;
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style-type: none;
  padding-inline-start: 0;
}

li:hover {
  color:#42b983;
  /* color: #e4464a; */
}


</style>
