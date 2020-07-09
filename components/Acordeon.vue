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
    grp: { type: String, default: '' },
  },
  grp: '',
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="scss">
.colapGroup {
  margin: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.colapsable {
  display: flex;
  justify-content: flex-start;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  div {
    margin: 5px 0;
    border: 1px solid $grey-lgt-75; // #80808070;
    padding: 0px 5px;
    border-radius: 9px;

    a {
      margin: 5px 0;
      display: flex;
      align-content: flex-start;
      text-decoration: none;

      display: flex;
      align-items: flex-start;

      @media screen and (max-width: $desktop) {
        flex-direction: row;
      }

      @media screen and (max-width: $tablet) {
        flex-direction: column;
      }

      @media screen and (max-width: $mobile) {
        flex-direction: column;
      }

      .name {
        border: 0;
        //width: 20%;
        color: $green-lgt-30;
        font-weight: 900;
      }

      .url {
        border: 0;
        color: $grey-drk;
        //width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>
