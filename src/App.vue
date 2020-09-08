<template>
  <div id="app">
    <div id ="navbar">
        <nav id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/quiz">Take the Quiz</router-link> |
          <router-link to="/about">About</router-link> |
          <div class = "dropdown">
              <button class="dropbtn">
                <img src="./assets/language.svg" alt="language" width="50em">
                <!-- <img src="./assets/caret-down.svg" alt="caretdown" width="10em"> -->
              </button>
              <div class = "dropdown-content">
                <button v-for = "(lang,value) in languages" v-bind:key="value" id="languageButton" v-on:click="changeLocale(value)">{{value}}</button>
              </div>
          </div>
        </nav>

        <transition
          name = "fade"
          mode = "out-in">
        <router-view/>
        </transition>
    </div>
  </div>
</template>

<script>
import i18n from '@/assets/i18n.js'
import lang from '@/assets/i18n.js'

export default {
  name: 'HelloWorld',
  data(){
    return{
      languages: {
        en: lang.en,
        kr: lang.kr,
      }
    };
  },
  methods: {
    changeLocale(locale) {
      console.log("locale change to: " + locale);
      i18n.locale = locale;    
    }
  }
}
</script>

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
  white-space:pre-wrap;
  background-color: #696969;
  text-align: center;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
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
  font-size:1.5em;
  font-weight: bold;

}
#nav a {
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style-type: none;
  padding-inline-start: 0;
}

.questions{
  margin-bottom: 2em;
  font-size:130%;
  font-weight:bold;
  white-space:pre-wrap;
}
.answers{
  margin-top:1em;
  /* font-size:110%; */
}
.next{
  margin-top:2em;
}

li:hover {
  color:#42b983;
  /* color: #e4464a; */
}

.qna input[type="radio"] {
  display: none;
}
.qna input[type="radio"]:checked+label{
  color: #42b983;
}
/* .qna label {
  border:1px solid black;
} */

.qna{
  min-height:44vh;
}
.quiz{
  margin: 0;
  padding: 0;
  font-size: 120%;
  min-height:45vh;
}
.button{
  font-size: 120%;
  color: white;
  background-color: transparent;
  border-style: none;
}
.dropbtn{
  width:3em;
  height:1.5em;
  /* background-color: transparent; */
  font-size: 1em;
  font-weight:bold;
  color:white;
  border:none;
}

.quiz-nav {
  display: inline-block;
  width: 1.3em;
  height: 1.3em;
}
.top3 { 
  white-space:pre-wrap;
}
/* Make radio button default clicked based on index. */
</style>
