const INITIAL_STATE = {
  pokemons: [],
  message: "",
  addPokemons: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POKEMON_SUCCESS":
      return { ...state, pokemons: action.payload };
    case "GET_POKEMON_ERROR":
      return { ...state, message: action.payload };
    case "ADDED_POKEMON":
      let existed_pokemon = state.addPokemons.find(item => action.payload.id === item.id)
      if (existed_pokemon) {
        return { ...state };
      } else {
        return { ...state, addPokemons: [...state.addPokemons, action.payload] };
      }
    case "REMOVED_POKEMON":
      return {
        ...state, addPokemons: [...state.addPokemons.filter(item => item.name !== action.payload.name)]
      }
    default:
      return state;
  }
};
