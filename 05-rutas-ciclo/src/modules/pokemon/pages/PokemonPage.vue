<template>
  <div>
    <h1>
      PokemonPage: <span>#{{ id }}</span>
    </h1>
  </div>
  <div v-if="pokemon">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // id: null,
      // id: this.$route.params.id,
      pokemon: null,
    };
  },

  created() {
    // console.log(this.$route);
    // const { id } = this.$route.params;
    // console.log(id);
    // this.id = id;
    //  cuando no se definen en las props pasa a a ser atributos
    // console.log(this.$attrs);

    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((res) => res.json());
        // .then((data) => data);
        console.log(pokemon);
        this.pokemon = pokemon;
      } catch (error) {
        // console.log(error);
        this.$router.push("/");
        console.log("No hay nada que hacer aqui");
      }
    },
  },
  watch: {
    id() {
      console.log(this.id);
      this.getPokemon();
    },
  },
};
</script>
