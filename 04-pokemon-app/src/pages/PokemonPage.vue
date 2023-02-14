<template>
  <h2 v-if="!pokemon">Espere por favor</h2>
  <div v-else>
    <h1>¿Quién es este pokemón?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions
      :pokemons="pokemonArr"
      @select-pokemon="checkAnswer($event)"
    />
  </div>
  <!-- Parecido al fragment en React -->
  <template v-if="showAnswer" class="fade-in">
    <h2>{{ message }}</h2>
    <button @click="newGame">Nuevo Juego</button>
  </template>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

// console.log(getPokemonOptions());

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
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
        this.message = `¡Correcto!, ${this.pokemon.name}`;
      } else {
        this.message = `Ops... ¡Incorrecto!, era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted() {
    // cuando se monte el componente, se ejecuta el método
    console.log("Mounted");
    this.mixPokemonArray();
  },
};
</script>
