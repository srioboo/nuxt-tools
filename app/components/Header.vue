<template>
  <header class="bg-[#1c6460] flex flex-row justify-between items-center h-12 text-white">
    <div class="burger w-10 h-6 flex flex-wrap justify-around self-center items-center cursor-pointer" @click="togleMenu()">
      <div class="line1 block h-0.5 w-6 bg-white"></div>
      <div class="line1 block h-0.5 w-6 bg-white"></div>
      <div class="line1 block h-0.5 w-6 bg-white"></div>
    </div>

    <div class="logo">
      VueTools
    </div>

    <div>
      <!-- <form class="buscador form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form> -->
    </div>
  </header>
</template>

<script lang="js">
/*import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  props: {
    msg: { type: String, required: false, default: '' },
  },
  methods: {
    togleMenu() {
      const nav = document.getElementById('navmenu');
      if(nav.getAttribute('class')){
        nav.removeAttribute('class');
      } else {
        nav.setAttribute('class', 'hide');
      }
    },
  },
});*/
</script>


<style >
/*@import '../assets/css/_variables.scss';

header {
  // background-color: $primary;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // color: $white;
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
      //background-color: $white;
    }
  }
}*/
</style>
