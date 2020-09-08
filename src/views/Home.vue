<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/tekken7.png">
    <HelloWorld/>
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
