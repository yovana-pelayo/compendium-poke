import React, { useState, useEffect } from 'react';
export default function SearchBar({ query, setQuery }) {
  const [value, setValue] = useState('');
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} placeholder="Search for Pokemon!" />
      <button onClick={() => setQuery(value)}>Search</button>
    </div>
  );
}
