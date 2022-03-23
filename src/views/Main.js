import { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemon';
import './Main.css';
import PokeCard from '../Components/PokeCard';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const typesData = await fetchTypes();
  //     setTypes(typesData);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchFilteredPokemon(page);
  //     setPokemon(data);
  //   };
  //   fetchData();
  // });
  return (
    <div className="main">
      <PokeCard types={types} />
      {pokemon.map((poke) => (
        <div key={poke.id}>
          <p>
            {poke.pokemon} ({poke.type_1})
          </p>
        </div>
      ))}
    </div>
  );
}
