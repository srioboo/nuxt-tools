<template>
  <main>
    <HxComp msg="Bookmarks" />
    <!-- TODO: refactorizar filtros <FiltrosComp /> -->
    <div class="filtro">
      <input
        type="text"
        v-model="search"
        value=""
        v-on:keyup.enter="filterElements"
      />
      <button class="btn-primary" v-on:click="clearFiltros">
        limpiar filtros
      </button>
      <div v-for="filtro in filtrado" v-bind:key="filtro.name">
        <button class="btn-filtro">{{ filtro }} x</button>
      </div>
    </div>

    <!-- TODO: evitar el bookmarks[0], modificando data.services.ts?? -->
    <div v-for="grupos in bookmarks[0]" :key="grupos.id" class="flex-content">
      <AcordeonComp :grp="grupos.nombre">
        <div class="grupo">
          <div v-for="bkm in grupos.direcciones" :key="bkm.name">
            <div class="name" v-if="esBuscado(bkm.name)">
              <a :href="bkm.url">{{ bkm.name }}</a>
            </div>
            <div class="url" v-if="esBuscado(bkm.name)">{{ bkm.url }}</div>
          </div>
        </div>
      </AcordeonComp>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex';
// @ is an alias to /src
import HxComp from '@/components/HxComponent.vue';
import AcordeonComp from '@/components/AcordeonComponent.vue';
// TODO: refactorizar filtros import FiltrosComp from '@/components/FiltrosComponent';

export default {
  name: 'Home',
  data() {
    return {
      search: '',
      filtrado: [],
    };
  },
  async created() {
    await this.loadBookmarks();
  },
  methods: {
    ...mapActions(['getBookmarksAction']),
    async loadBookmarks() {
      await this.getBookmarksAction();
    },
    // TODO: completar el filtro
    filterElements: function () {
      this.bookmarks.forEach((group) => {
        const direccion = group.direcciones.filter((dir) => {
          // console.log(dir.name + ' and ' + this.filtro);
          return dir.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        });
        // console.log('direccion' + direccion);
        // console.log('index: ' + index);
        if (direccion.length > 0) {
          this.filtrado.push(direccion[0].name);
        }

        //group.direcciones = direccion;
      });
    },
    clearFiltros: function () {
      this.filtrado = [];
      this.search = '';
    },
    esBuscado: function (name) {
      if (this.filtrado.length > 0 && this.filtrado.indexOf(name) > -1) {
        return true;
      } else if (this.filtrado.length === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    ...mapState(['bookmarks']),
  },
  components: {
    HxComp,
    AcordeonComp,
    // TODO: refactorizar filtros FiltrosComp,
  },
};
</script>

<style lang="scss" scoped>
.filtro {
  display: flex;
  justify-items: flex-start;
  margin-left: 50px;

  .btn-primary {
    border-radius: 5px;
    border: 1px solid blue;
    background-color: blue;
    height: 30px;
    color: white;
    font-weight: 900;
    padding: 5px 10px;
    margin: 0 5px;
    box-shadow: 2px 2px 3px 0px black;
  }

  .btn-filtro {
    margin: 0 5px;
    padding: 0 10px;
    border: 0px;
    border-radius: 5px;
    background-color: gray;
    color: white;
  }
}
</style>
