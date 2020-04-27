<template>
  <div>
    <Header />
    <div class="flex-content">
      <Menu />
      <div class="flexbox">
        <div class="flex-content-div">
          <div class="nav blue">
            uno
          </div>
          <div class="main red">
            dos
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Flexbox',
  components: {
    Header,
    Menu,
  },
};
</script>

<style lang="scss">
.flex-content-div {
  border: 1px solid #555;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 20px 0;
  flex-wrap: wrap;
  justify-content: space-around;

  div {
    margin: 0;
    display: inherit;
    padding: 10px;
    height: 100px;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: bolder;
    align-content: center;
  }

  .nav {
    width: 20vw;
  }

  .main {
    width: 65vw;
  }
}

.blue {
  border: 1px solid blue;
}

.red {
  border: 1px solid red;
}
</style>
