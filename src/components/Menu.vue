<template>
<nav>
  <ul class="menu">
    <li class="nav-item">
      <div class="nav-link">Ver todos Menu</div>
    </li>
    <li class="nav-item">
      <div class="nav-link">
          Hola mundo
      </div>
    </li>
  </ul>
</nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Menu',
  props: {
    msg: String,
  },
  data() {
    return {

    };
  },
});
</script>

<style lang="scss" scoped>
    @import '../css/_variables.scss';

    nav {
    background-color: $background-main;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    //height: 50px;
    align-items: center;


    .menu {
        margin: 10px 10px 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-self: center;
        min-width: 25vw;

        li {
            text-decoration: none;
            list-style: none;
            margin: 5px 0px;
            height: 50px;
        }
    }
}
</style>
