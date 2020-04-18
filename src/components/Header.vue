<template>
  <header>
    <div class="burger">
      <div class="line1"></div>
      <div class="line1"></div>
      <div class="line1"></div>
    </div>

    <div class="logo">
      The Logo
    </div>

    <div>
      <form class="buscador form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  props: {
    msg: String,
  },
  data() {
    return {
      text: 'Text',
    };
  },
  /* methods: {
    sayhello() {
      console.log('Hello!!');
    },
  }, */
});
</script>

<style lang="scss" scoped>
@import '../css/_variables.scss';

header {
  background-color: $background-main;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: $white;
  height: 50px;
  align-items: center;

  .logo {
    font-weight: bolder;
    font-family: sans-serif;
  }

  .buscador {
    // TODO: adaptar

    display: flex;
    justify-content: space-around;
    align-self: center;
    width: 50%;

    li {
      text-decoration: none;
      list-style: none;
    }
  }

  .burger {
    width: 40px;
    height: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-self: center;
    align-items: center;
    cursor: pointer;

    div {
      display: block;
      height: 3px;
      width: 25px;
      background-color: $white;
    }
  }
}
</style>
