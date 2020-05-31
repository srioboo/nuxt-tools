<template>
  <div id="app">
    <Header />
    <div class="flex-content">
      <Menu />
      <router-view />
    </div>
    <!-- <nuxt /> -->
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    Menu,
    Header,
  },
  data() {
    return {
      msg: 'value',
    };
  },
};
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

main {
  width: 100vw;
  margin-top: 1em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $grey; //#2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $grey; //#2c3e50;

    &.router-link-exact-active {
      color: $green;
    }
  }
}

.flex-content {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  // width: 100vw;
  flex-wrap: nowrap;
  // justify-content: space-around;

  h3 {
    margin: 0;
    display: inherit;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: bolder;
    align-content: center;
  }

  /*ul {
      align-items: center;
      font-weight: bolder;
      align-content: center;
    }*/
}
</style>
