<template>
  <main class="w-full mt-4">
   <!-- <Hx msg="Bookmarks" />-->
    <Hx msg="bookmarks"/>
    <!-- TODO: refactorizar filtros <FiltrosComp /> -->
    <div class="filtro">
      <label for=""
        >busqueda
        <input
          v-model="search"
          type="text"
          @keyup.enter="filterElements"
        />
      </label>
      <button class="btn-primary" @click="clearFiltros">limpiar filtros</button>
      <div v-for="filtro in filtrado" :key="filtro.name">
        <button class="btn-filtro">{{ filtro }} x</button>
      </div>
    </div>

    <!-- TODO: evitar el bookmarks[0], modificando data.services.ts?? -->
    <!--<div
      v-for="grupos in bookmarks.bookmarks"
      :key="grupos.id"
      class="flex-content"
    >
      <Acordeon :grp="grupos.nombre">
        <div class="grupo">
          <div v-for="bkm in grupos.direcciones" :key="bkm.name">
            <a :href="bkm.url">
              <div v-if="esBuscado(bkm.name)" class="name">
                {{ bkm.name }}
              </div>
              <div v-if="esBuscado(bkm.name)" class="url">{{ bkm.url }}</div>
            </a>
          </div>
        </div>
      </Acordeon>
    </div>-->
  </main>
</template>

<script lang="ts">
// import { Hx } from '#components';

//import { mapActions, mapState } from 'vuex';
// @ is an alias to /src
// import Hx from '@/components/Hx.vue';
//import Acordeon from '@/components/Acordeon.vue';
// TODO: refactorizar filtros import FiltrosComp from '@/components/FiltrosComponent';
/*
export default {
  name: 'Bookmarks',
  components: {
    //Hx,
   // Acordeon,
    // TODO: refactorizar filtros FiltrosComp,
  },
  async asyncData({ $content, params, error, store }) {
    // usando la api de content

    const response = await $content('db')
      .fetch()
      // eslint-disable-next-line prettier/prettier
      .catch((err) => {
        // error({ statusCode: 404, message: 'Page not found' });
        console.error(err);
      });

    store.commit('setBkms', response);

    // store.commit('reloadBkms', response);

    // return { response }; // esto es solo si es directo y no a traves del state
  },
  data() {
    return {
      search: '',
      filtrado: [],
    };
  },
  // computed: {
  //  ...mapState(['bookmarks']),
  //},
  methods: {
    //...mapActions(['getBookmarksAction']),

    // TODO: completar el filtro
    filterElements() {
      // eslint-disable-next-line prettier/prettier
      this.bookmarks.forEach((group) => {
        // eslint-disable-next-line prettier/prettier
        const direccion = group.direcciones.filter((dir) => {
          // console.log(dir.name + ' and ' + this.filtro);
          return dir.name.toLowerCase().includes(this.search.toLowerCase());
        });
        // console.log('direccion' + direccion);
        // console.log('index: ' + index);
        if (direccion.length > 0) {
          this.filtrado.push(direccion[0].name);
        }

        // group.direcciones = direccion;
      });
    },
    clearFiltros() {
      this.filtrado = [];
      this.search = '';
    },
    esBuscado(name) {
      if (this.filtrado.length > 0 && this.filtrado.includes(name)) {
        return true;
      } else if (this.filtrado.length === 0) {
        return true;
      } else {
        return false;
      }
    },
  },

};*/
</script>

<style lang="scss" scoped>
/*@import '../assets/css/_variables.scss';
.filtro {
  display: flex;
  justify-items: flex-start;
  margin-left: 10px;
  align-items: center;

  label,
  input {
    padding: 5px 10px;
    margin-right: 5px;
   // color: $grey-drkr;
  }

  .btn-primary {
    border-radius: 5px;
  //  border: 1px solid $blue;
  //  background-color: $blue;
    height: 30px;
  //  color: $white;
    font-weight: 900;
    padding: 5px 10px;
    margin: 0 5px;
 //   box-shadow: 2px 2px 3px 0px $black;
  }

  .btn-filtro {
    margin: 0 5px;
    padding: 0 10px;
    border: 0px;
    border-radius: 5px;
  //  background-color: $grey;
  //  color: $white;
  }
}*/
</style>
