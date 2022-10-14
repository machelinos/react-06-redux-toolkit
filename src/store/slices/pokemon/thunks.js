import { startLoadingPokemons, setPokemons } from "./"

export const getPokemons = (page = 0) =>{
    return async (dispatch, getState) =>{
        dispatch(startLoadingPokemons());

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`);
        const data = await resp.json();

         dispatch(setPokemons({page: page + 1, pokemons: data.results}))
    }
}