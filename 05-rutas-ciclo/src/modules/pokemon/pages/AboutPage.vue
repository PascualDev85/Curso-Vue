<template>
  <div>
    <h1>This is an about page</h1>
  </div>
  <hr />
  <h2>My name is {{ name }}</h2>
  <button @click="onChangeName">Change name</button>
</template>
<script>
export default {
  name: "AboutPage",
  // Todos los hooks de ciclo de vida de Vue 3 puede ser utilizado en Options API

  data() {
    return {
      name: "David",
    };
  },

  methods: {
    onChangeName() {
      console.log("Se cambiará el nombre a Natalia");
      this.name = "Natalia";
    },
  },

  beforeCreate() {
    console.log("AboutPage beforeCreate");
  },
  created() {
    console.log("AboutPage created");
    // Punto para hacer peticiones HTTP
  },
  beforeMount() {
    console.log("AboutPage beforeMount");
  },
  mounted() {
    console.log("AboutPage mounted");
  },
  beforeUpdate() {
    console.log("AboutPage beforeUpdate");
  },
  updated() {
    console.log("AboutPage updated");
  },
  activated() {
    console.log("AboutPage activated");
  },
  deactivated() {
    console.log("AboutPage deactivated");
  },
  beforeUnmount() {
    console.log("AboutPage beforeUnmount");
  },
  unmounted() {
    console.log("AboutPage unmounted");
    // Punto para hacer limpieza de eventos
  },
  errorCaptured() {
    console.log("AboutPage errorCaptured");
  },
  renderTracked() {
    console.log("AboutPage renderTracked");
  },
  renderTriggered() {
    console.log("AboutPage renderTriggered");
  },
};
</script>
