<template>
  <div id="app">
    <HeaderComp />
    <div class="flex-content">
      <MenuComp />
      <router-view />
    </div>
  </div>
</template>

<script>
import MenuComp from '@/components/MenuComponent.vue';
import HeaderComp from '@/components/HeaderComponent.vue';
export default {
  components: {
    HeaderComp,
    MenuComp,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

main {
  width: 100vw;
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
