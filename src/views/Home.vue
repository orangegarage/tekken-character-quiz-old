<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"; //import from component

export default {
  //route link in App.vue
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
