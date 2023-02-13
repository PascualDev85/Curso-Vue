<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- Las props están propimiente definido en el objeto o en la oción props, diferencia de atributo (attrs) -->
    <!-- <Counter :start="10" /> -->
    <!-- v-bind = : -->

    <!-- Mantiene el estado de manera independiente -->
    <!-- <Counter  /> -->

    <Indecision />
</template>

<script>
// import Counter from './components/Counter.vue';
import Indecision from './components/Indecision.vue';



export default {
  // Defino el nombre del componente
    name: "App",
    components: { 
      Indecision, 
      // Counter
    }
}
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
