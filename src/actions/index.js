import axios from "axios";

export const getPokemons = () => async (dispacth) => {
  let pokemonList = [];
  for (let i = 1; i <= 151; i++) {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => {
        pokemonList.push(response.data);
      })
      .catch((err) => {
        console.log(err)
      })
      .then(() => {
       const pokemon = pokemonList.map((value) => {
          return value;
        })
        dispacth({ type: "GET_POKEMON_SUCCESS", payload: pokemon })
      })
  }
};

export const addPokemon = (pokemon) => (dispacth) => {
  dispacth( {type: "ADDED_POKEMON", payload: pokemon})
}

export const removePokemon = (pokemon) => (dispacth) => {
  dispacth( {type: "REMOVED_POKEMON", payload: pokemon})
}