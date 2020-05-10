<template>
  <main>
    <HxComp msg="Bookmarks" />
    <div v-for="grupos in bookmarks" :key="grupos.id" class="flex-content">
      <AcordeonComp :grp="grupos.nombre">
        <div class="grupo">
          <div v-for="bkm in grupos.direcciones" :key="bkm.name">
            <div class="name">
              <a :href="bkm.url">{{ bkm.name }}</a>
            </div>
            <div class="url">{{ bkm.url }}</div>
          </div>
        </div>
      </AcordeonComp>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import HxComp from '@/components/HxComponent.vue';
import AcordeonComp from '@/components/AcordeonComponent.vue';

export default {
  name: 'Home',
  data() {
    return {
      bookmarks: [
        {
          id: 0,
          nombre: 'Tiendas',
          direcciones: [
            {
              name: 'Amazon',
              url: 'https://lwww.amazon.es',
            },
            {
              name: 'PcComponentes',
              url: 'http://www.pccomponentes.com',
            },
          ],
        },
        {
          id: 1,
          nombre: 'Redes sociales',
          direcciones: [
            {
              name: 'Facebook',
              url: 'Facebook',
            },
            {
              name: 'Twitter',
              url: 'https://www.twitter.com',
            },
            {
              name: 'Google+',
              url: 'https://plus.google.com',
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com',
            },
            {
              name: 'Linkedin',
              url: 'https://www.Linkedin.com',
            },
          ],
        },
      ],
    };
  },
  components: {
    HxComp,
    AcordeonComp,
  },
};
</script>

<style lang="scss" scoped></style>
