export async function fetchPokemon() {
  const params = new URLSearchParams();
  params.set('per page', 10);
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
// setting 10 a rule of 10 items per page
//  fetching resp is = to string so page number?? Ask TA
// data is displaying 10 items per page when called/ refresh?? what is a better or technical way to say this?

export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data.map((item) => item.type_1);
}
export async function fetchFilteredPokemon(type_1, page = 1) {
  const params = new URLSearchParams();

  params.set('perPage', 10);
  params.set('page', page);

  if (type_1 !== 'all') {
    params.set('type', type_1);
  }

  // if (search) {
  //   params.set('pokemon', search);
  // }

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
//starting page number is one
//array cannot use dot notation
