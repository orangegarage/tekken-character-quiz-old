<template>
  <div class="hello">
    <h1>{{ $t('main.welcome') }}</h1>
    <p>
      <b>{{ $t('main.1p') }}</b>
    </p>
      <p>
        {{ $t('main.introParagraph') }}
      </p>

    <p>
      <router-link to="/quiz"><b>{{ $t('main.takeQuiz') }}</b></router-link>
    </p>

    <h3>{{ $t('main.feedbackLink') }}:</h3>
    <ul>
      <li><a href="https://github.com/orangegarage/tekken-character-quiz" target="_blank" rel="noopener">{{ $t('main.githubLink')}}</a></li>
      <li><a href="https://twitter.com/jincontroller" target="_blank" rel="noopener">{{ $t('main.twtLink') }}</a></li>
      <li><router-link to="/about">FAQ</router-link></li>
    </ul>
  </div>
</template>

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
</style>