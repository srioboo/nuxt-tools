<template>
  <nav id="navmenu">
    <router-link tag="div" class="nav-link" to="/" exact>
      Bookmaks
      <!-- Ruta anidada??
      <router-link tag="div" class="nav-link" :to="{ name: 'Flexbox' }" exact>
        Flexbox
      </router-link> -->
    </router-link>
    <router-link tag="div" class="nav-link" to="/ckeditor" exact>
      Ckeditor
    </router-link>
    <router-link tag="div" class="nav-link" :to="{ name: 'Flexbox' }" exact>
      Flexbox
    </router-link>
    <router-link tag="div" class="nav-link" :to="{ name: 'Rest' }" exact>
      Rest
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MenuComponent',
  props: {
    msg: String,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss">
nav {
  box-shadow: 0px 0px 5px 0px $green;
  color: $white;
  width: 20vw;
  height: 100vh;
  font-weight: bolder;

  &.hide {
    display: none;
  }

  .nav-link {
    padding-left: 15px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: $black;
    border-bottom: 1px solid $green;

    &.router-link-exact-active {
      background-color: $green-darker;
      color: $white;
    }

    &.router-link-active {
      background-color: $green-darker;
      color: $white;
    }

    &:hover {
      background-color: $green;
      color: $white !important;
    }

    &.sublink {
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 0px;
    }
  }

  /*.menu {
    //height: 100vh;

    .nav-item {
      text-decoration: none;
      list-style: none;
      border-bottom: 1px solid $green; //$background-main;

      .nav-link {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $black;

        &.router-link-exact-active {
          background-color: $green-darker;
          color: $white;
        }

        &.router-link-active {
          background-color: $green-darker;
          color: $white;
        }

        &:hover {
          background-color: $green;
          color: $white !important;
        }
      }
    }

    .submenu {
      color: black;

      .nav-item {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 0px;
      }
    }
  }*/
}
</style>
