import { useEffect, useState } from 'react';
import PokeCard from '../Components/PokeCard';
import TypeDropdown from '../Components/TypeDropdown';
import { fetchFilteredPokemon, fetchTypes } from '../services/pokemon';
import './Main.css';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  // const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const typesData = await fetchTypes(selectedType, setSelectedType);
      setTypes(['all', ...typesData]);
    };
    fetchData();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const typesData = await fetchTypes();
  //     setTypes(['all', ...typesData]);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilteredPokemon(selectedType, page);
      setPokemon(data);
      setLoading();
    };
    fetchData();
  }, [selectedType, page]);
  if (loading) return <div className="o-pokeball">icon</div>;
  return (
    <div>
      <TypeDropdown types={types} setSelectedType={setSelectedType} selectedType={selectedType} />
      {pokemon.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
}
