<template>
  <main>
    <HomeComp msg="Welcome to Your Vue.js App" />
  </main>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComponent.vue';

export default {
  name: 'Home',
  components: {
    HomeComp,
  },
};
</script>

<style lang="scss" scoped></style>
