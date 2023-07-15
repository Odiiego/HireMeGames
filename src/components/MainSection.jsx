import React from 'react';

import SearchBar from '../components/SearchBar';
import GenreMenu from '../components/GenreMenu';
import FilterControl from '../components/FilterControl';
import GameSection from '../components/GameSection';

function MainSection() {
  return (
    <>
      <SearchBar />
      <GenreMenu />
      <FilterControl />
      <GameSection />
    </>
  );
}

export default MainSection;
