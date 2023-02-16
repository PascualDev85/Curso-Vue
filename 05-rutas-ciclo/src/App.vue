<template>
  <NavbarComp />
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
</template>

<script>
// import NavbarComp from "./modules/shared/components/NavbarComp";
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    NavbarComp: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "NavbarComp" */ "./modules/shared/components/NavbarComp.vue"
      )
    ),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
