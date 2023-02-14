import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
  // voy a crear un array basado en el array de 650 pokemons
  const pokemonsArr = Array.from(Array(650));
  //   console.log(pokemonsArr);

  // voy a retornar un nuevo array con el map para emoiece en 1 hasta el  650
  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
  // ordenar de manera aleatoria
  // - 0.5 para que tenga numeros negativos y positivos

  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

  //   console.log(mixedPokemons);

  // obtener los primeros 4 elementos del nuevo array
  const pokemons = await getPokemonNames(mixedPokemons.slice(0, 4));
  //   console.table(pokemons);

  return pokemons;
};

// función para saber los nombres de los 4 pokemons
// const getPokemonNames = (pokemons = []) => {
const getPokemonNames = async ([a, b, c, d] = []) => {
  //   const resp = await pokemonApi.get(`/2`);
  //   console.log(resp.data.name, resp.data.id);

  // hacer una petición simultanea a la api de pokemon 4 veces
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];

  //   const resps = Promise.all(promiseArr);
  //   console.log(resps);

  const [p1, p2, p3, p4] = await Promise.all(promiseArr);

  return [
    { id: p1.data.id, name: p1.data.name },
    { id: p2.data.id, name: p2.data.name },
    { id: p3.data.id, name: p3.data.name },
    { id: p4.data.id, name: p4.data.name },
  ];

  //   console.log(a, b, c, d);
};

export default getPokemonOptions;
