<template>
  <nav id="navmenu">
    <router-link tag="div" class="nav-link" to="/" exact>
      Home
    </router-link>
    <router-link tag="div" class="nav-link" to="/bookmarks" exact>
      Bookmaks
      <!-- Ruta anidada??
      <router-link tag="div" class="nav-link" :to="{ name: 'Flexbox' }" exact>
        Flexbox
      </router-link> -->
    </router-link>
    <div class="nav-link" @click="toggleShow">
      Editores y Otros
    </div>
    <div class="sub-nav-group hide">
      <!-- <router-link tag="div" class="sub-nav-link" to="/ckeditor" exact>
        Ckeditor
      </router-link> -->
      <router-link tag="div" class="sub-nav-link" to="/quilleditor" exact>
        Quill
      </router-link>
      <router-link
        tag="div"
        class="sub-nav-link"
        :to="{ name: 'Flexbox' }"
        exact
      >
        Flexbox
      </router-link>
    </div>
    <router-link tag="div" class="nav-link" :to="{ name: 'Rest' }" exact>
      Rest
    </router-link>
  </nav>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Menu',
  props: {
    msg: { type: String, required: false, default: '' },
  },
  data() {
    return {};
  },
  methods: {
    toggleShow(event) {
      const elemento = event.target;
      elemento.nextElementSibling.classList.toggle('hide');
    },
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

  .sub-nav-group {
    &.hide {
      display: none;
    }
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

  .sub-nav-link {
    display: flex;
    justify-content: stretch;
    flex-direction: row;
    color: $black;
    height: 50px;
    align-items: center;
    padding-left: 30px;
    background-color: $green-light;
    border-bottom: 1px solid $green;
  }
}
</style>
