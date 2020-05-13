<template>
  <main class="main" id="s1">
    <div class="form">
      <select v-bind:key="version">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>

    <div id="identificadores">
      <div>
        <p>
          StoreId
          <select name="storeId" id="storeId" v-model="storeId">
            <option
              v-for="(storeId, index) in stores"
              v-bind:key="storeId.name"
              :value="storeId.name"
            >
              {{ index }}. {{ storeId.name }}
            </option>
          </select>
          seleccionada: {{ storeId }}
        </p>
      </div>
      <div>
        <p>
          CatalogId

          <select name="" id="" v-model="catalogId">
            <option
              v-for="(catalogId, index) in catalogs"
              v-bind:key="catalogId.cat"
            >
              {{ index }}. {{ catalogId.cat }}
            </option>
          </select>
        </p>
      </div>
      <div>
        <p>
          CategoryId

          <input
            id="categoryId"
            name="categoryId"
            type="number"
            v-model="categoryId"
          />
        </p>
      </div>
    </div>

    <div id="entorno">
      <input type="checkbox" value="stgpre" /> Stgpre
      <input type="checkbox" value="pre" /> Pre
    </div>

    <div id="tiendas">
      <input type="checkbox" value="ayl" />
      <input type="checkbox" value="myrl" />
    </div>

    <div>
      <select name="">
        <option
          v-for="x in consultasRest"
          :value="plantilla"
          v-bind:key="x.tipo"
        >
          {{ x.tipo + ' - ' + x.plantilla }}
        </option>
      </select>
    </div>

    <div class="main">
      <span>{{ cadena1 + cadena2 }}</span
      ><br />
      <div v-for="x in entornos" :key="x.id">
        <a compile="template" href="template">{{ template }}</a>
        http://{{ x.urlz }}/{{ version }}/catalog/store/{{ storeId }}/{{
          catalogId
        }}/category/{{ categoryId }}/product
        <!--a
            href="http://{{x.urlz}}/{{version}}/catalog/store/{{storeId}}/{{catalogId}}/category/{{categoryId}}/product"
            compile="template">
                http://{{x.urlz}}/{{version}}/catalog/store/{{storeId}}/{{catalogId}}/category/{{categoryId}}/product
            </a -->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Rest',
  components: {},
  data() {
    return {
      storeId: '',
      stores: { 10001: { name: 'test' }, 10002: { name: 'test2' } },
      catalogId: '',
      catalogs: {
        0: { name: 10001 },
      },
      categoryId: 'ESE1',
      consultasRest: {
        tipo: 'uno',
        plantilla: 'https://asdaf',
      },
      plantilla: 'sfas',
      cadena1: 'hola',
      cadena2: 'mundo',
      template: { id: 1, name: 'tesmplate' },
      entornos: {
        id: 0,
        name: 'STG',
        id: 1,
        name: 'PRE',
      },
      version: 'version',
    };
  },
  methods: {
    getEntorno() {
      this.entornos = {
        id: 0,
        name: 'STG',
      };
    },
    getVersion() {
      this.version = 'version';
    },
  },
};
</script>

<style lang="scss">
.main {
  border: 1px solid $red;
  //width: 100vw;
}
</style>
