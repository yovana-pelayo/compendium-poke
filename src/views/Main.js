import { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemon';
import './Main.css';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);
  return (
    <div className="pokemon-name">
      {pokemon.map((poke) => (
        <div key={poke.id}>
          <p>{poke.pokemon}</p>
        </div>
      ))}
    </div>
  );
}
