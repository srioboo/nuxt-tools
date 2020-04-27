<template>
  <nav id="navmenu">
    <!--  <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/flexbox">Flexbox</router-link>|
      <router-link to="/rest">Rest</router-link>
    </div> -->
    <ul class="menu">
      <li class="nav-item">
        <div class="nav-link">Ver todos Menu</div>
      </li>
      <li class="nav-item">
        <router-link tag="div" class="nav-link" to="/" exact>Home</router-link>
      </li>
      <li class="nav-item">
        <router-link tag="div" class="nav-link" to="/ckeditor" exact
          >Ckeditor</router-link
        >
      </li>
      <li class="nav-item">
        <router-link tag="div" class="nav-link" :to="{ name: 'Flexbox' }" exact
          >Flexbox</router-link
        >
      </li>
      <li class="nav-item">
        <router-link tag="div" class="nav-link" :to="{ name: 'Rest' }" exact
          >Rest</router-link
        >
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
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import '../css/_variables.scss';

nav {
  background-color: $background-main;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  //height: 50px;
  align-items: center;
  width: 20vw;

  &.hide {
    display: none;
  }

  .menu {
    /*margin: 10px 10px 10px 20px;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    width: 100%;
    height: 100vh;

    .nav-item {
      text-decoration: none;
      list-style: none;
      /*margin: 5px 0px;
      height: 150px;*/
      width: 100%;

      .nav-link {
        // border: 1px solid rgb(0, 36, 0);
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.router-link-exact-active {
          /*border: 1px dotted blue;*/
          background-color: rgb(0, 36, 0);
        }

        &.router-link-active {
          /*background-color: rgb(0, 36, 0);*/
        }
      }
    }

    .nav-item:hover {
      background-color: rgb(0, 36, 0);
    }
  }
}
</style>
