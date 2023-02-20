<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <CounterCom />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "App",
  components: {
    CounterCom: defineAsyncComponent(() =>
      import("./components/CounterCom.vue")
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
