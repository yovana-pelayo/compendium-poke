import { useEffect, useState } from 'react';
import { fetchTypes, fetchPokemon, fetchFilteredPokemon } from '../services/pokemon';
import './Main.css';
import PokeCard from '../Components/PokeCard';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const typesData = await fetchTypes();
      setTypes(typesData);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchFilteredPokemon(page);
  //     setPokemon(data);
  //   };
  //   fetchData();
  // });
  return (
    <div className="pokemon-name">
      Hello
      {pokemon.map((poke) => (
        <PokeCard key={poke.types} {...poke} />
      ))}
    </div>
  );
}
