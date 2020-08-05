<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' //import from component

export default { //route link in App.vue
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
