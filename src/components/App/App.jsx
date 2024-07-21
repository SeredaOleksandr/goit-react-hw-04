import { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const handleSearchSubmit = query => {
    console.log('Serch query:', query);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
    </>
  );
}

export default App;
