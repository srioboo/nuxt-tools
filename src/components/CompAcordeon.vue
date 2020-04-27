<template>
  <div class="colapGroup">
    <div v-if="visible" class="colapsable" @click="visible = !visible">
      &#43; mostrar {{ visible }}
    </div>
    <div v-if="!visible" class="colapsable" @click="visible = !visible">
      &#8211; ocultar {{ visible }}
    </div>
    <!-- slot: este slot contendrá lo que vaya entra la etiquietas de apertura y cierre del acordeón -->
    <slot v-if="visible"> </slot>
    <!-- slot -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.colapGroup {
  margin: 20px;
  width: auto;
}

.colapsable {
  display: block;
  width: 100%;
  background-color: cadetblue;
}
</style>
