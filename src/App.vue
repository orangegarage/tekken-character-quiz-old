<template>
  <div id="app">
    <div id = "navbar">
        <nav id="nav">
          <router-link to="/">{{ $t('navbar.home') }}</router-link> |
          <router-link to="/quiz">{{ $t('navbar.takeQuiz') }}</router-link> |
          <router-link to="/characters">{{ $t('navbar.characters') }}</router-link> |
          <router-link to="/about">{{ $t('navbar.about') }}</router-link> |

          <div class = "dropdown">
              <button class="langbtn" v-on:click="changeLocale()">
                <img src="./assets/language.svg" alt="language" width="50em">
              </button>
          </div>
        </nav>
    </div>

        <transition
          name = "fade"
          mode = "out-in">
        <router-view/>
        </transition>
  </div>
</template>

<script>
import i18n from '@/assets/i18n.js'

export default {
  name: 'HelloWorld',
  methods: {
    changeLocale() {
      if(i18n.locale == 'ko'){
        i18n.locale = 'en';
      }
      else{
        i18n.locale = 'ko';
      }
      //i18n.locale = locale;
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
  background-color: #1b262c;
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
  color: #bbe1fa;
}

#nav {
  padding: 30px;
  font-size:1.5em;
  font-weight: bold;

}
#nav a {
  color: #bbe1fa;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ffbd69;
}
#navbar .dropdown{
  display:inline-block;
}

ul {
  list-style-type: none;
  padding-inline-start: 0;
}

.hello{
  margin-bottom: 5em;
}

.hello a {
  color: #ffbd69;
}
.hello li{
  display: inline-block;
  margin-left: 1em;
  margin-right: 1em;
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
  color:#ffbd69;
  /* color: #e4464a; */
}

.langbtn{
  color:#bbe1fa;
  background-color:transparent;
  vertical-align: middle;
  border:none;
}

.qna input[type="radio"] {
  display: none;
}
.qna input[type="radio"]:checked+label{
  color: #ffbd69;
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
  color: #bbe1fa;
  background-color: transparent;
  border-style: none;
}
.quiz-nav {
  display: inline-block;
  width: 1.3em;
  height: 1.3em;
}

.specialthanks, .faq{
    margin-bottom: 5em;
}
.specialthanks a, .faq a, .top3 a{
  color: #ffbd69;
  text-decoration: none;
  font-weight: bolder;
}

.top3 { 
  white-space:pre-wrap;
}
.top3 ul{
  padding-bottom:5em;
}
.top3 p{
  font-size: .7em;
}

.resultingimg{
  display: inline-block;
}
.resultingimg img{
  width:50%;
}

/* probably can consolidate this a lot better*/
/* Make radio button default clicked based on index. */

@media only screen and (max-width: 600px){
  .next {
    white-space: nowrap;
    font-size: 100%;
  }
  .quiz-nav {
    width:.8em;
    height:.8em;
  }
  .button {
    font-size:100%;
  }
  .quiz-nav{
    display:none;
  }
  .resultingimg{
    width:33%;
  }

}
</style>
