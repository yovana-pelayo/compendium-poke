export async function fetchPokemon() {
  const resp = await fetch(' https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await resp.jason();
  return data.results;
}
