<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header />
    <div class="flex-content">
      <Menu />
      <CompAcordeon>
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </CompAcordeon>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Menu from '@/components/Menu.vue';
import Header from '@/components/Header.vue';
import CompAcordeon from '@/components/CompAcordeon.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header,
    Menu,
    CompAcordeon,
  },
};
</script>
