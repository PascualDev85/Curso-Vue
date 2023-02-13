<template>
  <h1>¿Quién es este pokemón?</h1>

  <pokemon-picture :pokemonId="56" :showPokemon="true" />
  <pokemon-options />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
export default {
  components: { PokemonPicture, PokemonOptions },
};
</script>
