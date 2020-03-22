<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/flexbox">Flexbox</router-link>|
      <router-link to="/rest">Rest</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.flex-content {

    border: 1px solid #555;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 10px 0;
    /*width: 100vw;*/
    flex-wrap: nowrap;
    justify-content: space-around;

    h3 {
        margin: 0;
        display: inherit;
        /*padding: 10px;*/
        /*height: 100px;*/
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        font-weight: bolder;
        align-content: center;
    }

    ul {
        align-items: center;
        font-weight: bolder;
        align-content: center;
    }

}
</style>
