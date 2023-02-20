<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="navbar">
        <q-toolbar-title>
          Pokedex
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="container-view">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    return {
    }
  }
})
</script>
<style lang="scss">
.navbar {
  background-color: red;
  text-align: center;
}
.container-view {
  background-color: #d6d6d6;
  animation: example 4s infinite;
  animation-direction: alternate;

}
@keyframes example {
  from {background-color: #d6d6d6;}
  to {background-color: rgb(165, 144, 144);}
}
</style>
