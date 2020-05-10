<template>
  <div class="colapGroup">
    <div v-if="visible" class="colapsable" @click="visible = !visible">
      &#43; {{ grp }}
    </div>
    <div v-if="!visible" class="colapsable" @click="visible = !visible">
      &#8211; {{ grp }}
    </div>
    <!-- slot: este slot contendrá lo que vaya entra la etiquietas de apertura y cierre del acordeón -->
    <slot v-if="visible"> </slot>
    <!-- slot -->
  </div>
</template>

<script>
export default {
  props: {
    grp: String,
  },
  grp: '',
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
  width: 100%;
}

.colapsable {
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
  width: 100%;
  background-color: $primary;
  height: 30px;
  border-radius: $radius-large;
  color: $white;
  font-weight: $weight-bold;
}

.grupo {
  margin: 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  div {
    margin: 5px 0;
    display: flex;
    align-content: flex-start;

    .name {
      width: 20%;
    }
    .url {
      width: 70%;
    }
  }
}
</style>
