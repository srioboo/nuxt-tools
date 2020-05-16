<template>
  <div class="filtro">
    <input
      type="text"
      v-model="search"
      value=""
      v-on:keyup.enter="filterElements"
      v-on:focus="clearSearch"
    />
    <button>filtrar</button>
    <div v-for="filtro in filtrado" v-bind:key="(filtro, index)">
      <button class="btn-filtro">{{ filtro }} x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FiltrosComponent',
  methods: {
    // TODO: completar el filtro
    /*filterElements: function () {
      this.bookmarks.forEach((group, index) => {
        const direccion = group.direcciones.filter((dir) => {
          //console.log(dir.name + ' and ' + this.filtro);
          return dir.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        });
        console.log(direccion);
        this.filtrado.push(direccion[0].name);
        //group.direcciones = direccion;
      });
    },
    clearSearch: function () {
      console.log('clear');
      this.filtrado = [];
      this.search = '';
    },
    esBuscado: function (name) {
      if (this.filtrado.length > 0 && this.filtrado.indexOf(name) > -1) {
        return false;
      } else if (this.filtrado.length === 0) {
        return true;
      } else {
        return true;
      }
    },*/
  },
};
</script>

<style lang="scss" scoped></style>
