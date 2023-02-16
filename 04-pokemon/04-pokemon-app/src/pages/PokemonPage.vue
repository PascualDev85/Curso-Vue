<template>
  <h2 v-if="!pokemon">Espere por favor</h2>
  <div v-else>
    <h1>¿Quién es este pokemón?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions
      :pokemons="pokemonArr"
      @select-pokemon="checkAnswer($event)"
    />
    <Timer :replayGame="replayGame" />
    <p>Vidas: {{ vidas }}</p>
    <p>Preguntas Correctas: {{ correctCount }}</p>
    <p>Cuantas preguntas respondidas{{ totalCount }}</p>
    <p>Puntos: {{ score }}</p>
  </div>
  <!-- Parecido al fragment en React -->
  <template v-if="showAnswer" class="fade-in">
    <h2>{{ message }}</h2>
    <button @click="replayGame">Nuevo Juego</button>
  </template>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import Timer from "@/components/Timer.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

// console.log(getPokemonOptions());

export default {
  components: { PokemonPicture, PokemonOptions, Timer },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      vidas: 3,
      correctCount: 0,
      totalCount: 0,
      score: 0,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    // los métodos puedes ser asíncronos
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      // console.log(this.pokemonArr);

      // creamos un nº aleatorio entre 0 y 3
      const randomIndex = Math.floor(Math.random() * 4);
      // console.log(randomIndex);
      this.pokemon = this.pokemonArr[randomIndex];
    },
    checkAnswer(selectId) {
      // console.log("Pokemon Page llamado", pokemonId);
      this.showPokemon = true;
      this.showAnswer = true;

      if (selectId === this.pokemon.id) {
        this.correctCount += 1;
        this.score += 5;
        this.message = `¡Correcto!, ${this.pokemon.name}`;
      } else {
        if (this.vidas > 0) {
          this.vidas--;
          this.score -= 3;
          this.message = `Ops... ¡Incorrecto!, era ${this.pokemon.name}`;
        } else {
          alert("Perdiste");
          // this.newGame();
        }
        this.totalCount += 1;
      }
    },
    replayGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      // this.vidas = 3;
      this.mixPokemonArray();
    },
    newGame() {
      this.replayGame();
      this.vidas = 3;
    },
  },
  mounted() {
    // cuando se monte el componente, se ejecuta el método
    console.log("Mounted");
    this.mixPokemonArray();
  },
};
</script>
