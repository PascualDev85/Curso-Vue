<template>
  <div>
    <p>Contador: {{ contador }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 5,
      intervalId: null, // agrega un estado para almacenar el identificador del intervalo
    };
  },
  props: {
    replayGame: {
      type: Function,
      required: true,
    },
  },
  methods: {
    reducirContador() {
      this.intervalId = setInterval(() => {
        this.contador--;
        if (this.contador === 0) {
          clearInterval(this.intervalId); // detener el intervalo pasando el identificador como argumento
          console.log("Se acabó el tiempo");
          // llamar a la función newGame que se pasa como prop
          this.replayGame();
        }
      }, 1000);
    },
  },
  mounted() {
    this.reducirContador();
  },
};
</script>
<style scoped>
p {
  font-size: 2em;
  font-family: "PixelColeco";
  color: #2c363f;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}

.little-time {
  color: #e75a7c;
}
</style>
