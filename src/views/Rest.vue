<template>
  <section class="main" id="s1">
    <div class="form">
      <select ng-model="version">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>

    <div id="identificadores">
      <div>
        <div>StoreId</div>
        <div>
          <select name="" id="">
            <option
              v-for="(storeId, index) in stores"
              v-bind:key="storeId.name"
            >
              {{ index }}. {{ storeId.name }}
            </option>
          </select>
        </div>
      </div>
      <div>
        <div>CatalogId</div>
        <div>
          <select name="" id="">
            <option
              v-for="(catalogId, index) in catalogs"
              v-bind:key="catalogId.cat"
            >
              {{ index }}. {{ catalogId.cat }}
            </option>
          </select>
        </div>
      </div>
      <div>
        <div>CategoryId</div>
        <div>
          <input
            id="categoryId"
            name="categoryId"
            type="number"
            v-model="categoryId"
          />
        </div>
      </div>
    </div>

    <div id="entorno">
      <input
        type="checkbox"
        value="stgpre"
        ng-model="cadena1"
        ng-true-value="'zarahome'"
        ng-false-value="''"
      />
      <input
        type="checkbox"
        value="pre"
        ng-model="cadena2"
        ng-true-value="'stradivarius'"
        ng-false-value="''"
      />
    </div>

    <div id="tiendas">
      <input
        type="checkbox"
        value="ayl"
        ng-model="cadena1"
        ng-true-value="'zarahome'"
        ng-false-value="''"
      />
      <input
        type="checkbox"
        value="myrl"
        ng-model="cadena2"
        ng-true-value="'stradivarius'"
        ng-false-value="''"
      />
    </div>

    <div>
      <select name="" ng-model="template">
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
      <div ng-repeat="x in entornos">
        <a compile="template" href="template">{{ template }}</a>

        <!--a
            href="http://{{x.urlz}}/{{version}}/catalog/store/{{storeId}}/{{catalogId}}/category/{{categoryId}}/product"
            compile="template">
                http://{{x.urlz}}/{{version}}/catalog/store/{{storeId}}/{{catalogId}}/category/{{categoryId}}/product
            </a -->
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.main {
  border: 1px solid red;
}
</style>

<script>
export default {};
</script>
