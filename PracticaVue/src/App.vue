<script setup>
  import {ref} from 'vue'
  let name = "David Pascual";
  const active = ref(false);
  
  const arrayFrutas = [
  {
    name: "Manzana",
    price: "1.50€",
    description: "Manzana de la huerta"
  },
  {
    name: "Pera",
    price: "1.50€",
    description: "Pera de la huerta"
  },
  {
    name: "Sandía",
    price: "1.50€",
    description: "Sandía de la huerta"
  },
  {
    name: "Melón",
    price: "1.50€",
    description: "Melón de la huerta"
  },
  ];

  const objectFrutas = {
    id: 1,
    name: "Manzana",
    price: "1.50€",
    description: "Manzana de la huerta"}

  // Abrir el ul con un boton con el evento click
  const onShowClick = () => {
    console.log("Abrir");
    active.value = !active.value;

  };

</script>

<template>
  <div id="app">
    <h1>Hola, me llamo: {{ name.toUpperCase() }}</h1>
    <button @click="onShowClick">{{ active ? "Cerrar" : "Abrir" }}</button>

    
    <ul v-if="active">
      <li v-for="fruta in arrayFrutas" :key="fruta.name">
        <h2>{{ fruta.name }}</h2>
        <p>{{ fruta.price }}</p>
        <p>{{ fruta.description }}</p>
      </li>
    </ul>
    <ul>
      <li v-for="(value, propiedad, index) in objectFrutas" :key="key">
    {{ index }} - {{ propiedad }} - {{ value }}
      </li>
    </ul>
  </div>

</template>

<style>
  h1 {
    color: red;
  }
</style>