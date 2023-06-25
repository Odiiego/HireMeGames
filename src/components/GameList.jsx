import React from 'react';

import SearchBar from './SearchBar';
import GenreMenu from './GenreMenu';
import GameSection from './GameSection';

const GameList = () => {
  return (
    <>
      <SearchBar />
      <GenreMenu />
      <GameSection />
    </>
  );
};

export default GameList;
