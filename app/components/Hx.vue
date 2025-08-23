<template>
  <div>
    <h1 class="ml-5 text-xl flex content-start"">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Hx',
  props: {
    msg: { type: String, required: true },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
