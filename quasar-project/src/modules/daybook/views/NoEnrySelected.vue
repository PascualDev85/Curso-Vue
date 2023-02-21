<template>
  <q-page class="flex justify-center items-center">
    <h1>No hay nada seleccionado</h1>
  </q-page>
  <FabC />
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "NoEnrySelected",
  components: {
    FabC: defineAsyncComponent(() => import("../components/FabC.vue")),
  },
};
</script>

<style></style>
