<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header />
    <Menu />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Menu from '@/components/Menu.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header,
    Menu,
  },
};
</script>
