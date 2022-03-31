import { useEffect, useState } from 'react';
import PokeCard from '../Components/PokeCard';
import { fetchPokemon } from '../services/pokemon';
import './Main.css';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [types, setTypes] = useState([]);
  // const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(pokemon);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const typesData = await fetchTypes();
  //     setTypes(['all', ...typesData]);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchFilteredPokemon();
  //     setPokemon(data);
  //     setLoading();
  //   };
  //   fetchData();
  // }, []);
  if (loading) return <div>loading</div>;
  return (
    <div>
      {pokemon.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
}
