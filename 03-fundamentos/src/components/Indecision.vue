<template>
  <img v-if="img" :src="img" alt="bg" />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input type="text" placeholder="Hazme una pregunta" v-model="question" />
    <p>Recuerda que debes terminar con un sigo de interrogación (?)</p>

    <div v-if="isValidateQuestion">
      <h2>{{ question }}</h2>
      <!-- <h1>{{ asnwer === 'yes' ? 'Si!' : 'No' }}</h1> -->
      <h1>{{ asnwer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
      asnwer: null,
      img: null,
      isValidateQuestion: false,
    };
  },
  methods: {
    async getAnswer() {
      try {
        this.asnwer = "Pensando...";

        const { answer, image } = await fetch("https://yesno.wtf/api").then(
          (res) => res.json()
        );

        this.asnwer = answer === "yes" ? "Si!" : "No!";
        this.img = image;

        console.log({ answer, image });
      } catch (error) {
        console.log(error);
      }
    },
  },
  //   El watch es un observador, que se ejecuta cuando se detecta un cambio en la propiedad
  watch: {
    question(value, oldValue) {
      this.isValidateQuestion = false;

      //   console.log({value, oldValue});
      console.log(value.includes("?"));
      if (!value.includes("?")) return;

      this.isValidateQuestion = true;

      //   TODO: Realizar la petición a la API
      this.getAnswer();
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin-top: 50px;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 10px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
