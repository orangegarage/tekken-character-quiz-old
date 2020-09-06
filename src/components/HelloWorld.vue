<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <b>-Don't be pressured to pick a particular character because of this quiz-</b>
    </p>
      <p>
        This quiz will try to choose the character you will enjoy playing based on your playstyle and other preferences.<br>
        There are no right or wrong answers to the questions - it is only to gauge your preference.<br>
        This quiz is meant to serve as a guide to narrow down options for you when you are feeling overwhelmed.<br>
        If you already have different character in mind, go for it. The only way to know for sure is to play.<br>
        Please feel free to leave feedback on the links provided below.<br>
        Have fun!
      </p>

    <p>
      <router-link to="/quiz"><b>Take the Quiz</b></router-link>
    </p>

    <h3>Questions/Feedback:</h3>
    <ul>
      <li><a href="https://github.com/orangegarage/tekken-character-quiz" target="_blank" rel="noopener">Source Code</a></li>
      <li><a href="https://twitter.com/jincontroller" target="_blank" rel="noopener">Twitter</a></li>
    </ul>
    
    <h3>Starting Resources:</h3>
    <ul>
      <li><a href="https://www.reddit.com/r/Tekken/comments/699xxr/general_information_faq/">English</a></li>
      <li><a href="https://gall.dcinside.com/m/tekken7/73843">Korean</a></li>
    </ul>
    
    <h3>Frameworks/Plugins</h3>
    <ul>
      <li><a href="https://vuejs.org/" target="_blank" rel="noopener">vueJS</a></li>
      <li><a href="https://kazupon.github.io/vue-i18n/" target="_blank" rel="noopener">vue-i18n</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>