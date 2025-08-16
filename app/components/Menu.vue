<template>
  <nav id="navmenu" class="w-1/5 h-screen font-extrabold">
    <router-link tag="div" class="nav-link pl-2.5 h-12 flex items-center content-start border-b-1 border-b-green-950" to="/" exact>
      Bookmaks
    </router-link>
    <!--<router-link tag="div" class="nav-link" to="/bookmarks" exact>
      Bookmaks
    </router-link>-->
    <!--<div class="nav-link" @click="toggleShow">Editores y Otros</div>
    <div class="sub-nav-group hide">
      <router-link tag="div" class="sub-nav-link" to="/quilleditor" exact>
        Quill
      </router-link>
      <router-link
        tag="div"
        class="sub-nav-link"
        :to="{ path: 'flexbox' }"
        exact
      >
        Flexbox
      </router-link>
    </div>-->
  </nav>
</template>

<script setup lang="ts">
function toggleShow(className: string) {
  const nav = document.getElementById('navmenu');
  if (nav) {
    nav.classList.add(className);
  }
}
</script>

<style>
#navmenu {
  display: hidden;
}
</style>
