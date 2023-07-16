import React from 'react';

import SearchBar from '../components/SearchBar';
import GenreMenu from '../components/GenreMenu';
import FilterControl from '../components/FilterControl';
import GameSection from '../components/GameSection';

import GameListContext from '../context/GameListContext';
import useGameList from '../hooks/useGameList';

function MainSection() {
  const { data, userData, genreList } = React.useContext(GameListContext);
  const { gameList } = useGameList(data, userData);

  return (
    <>
      <SearchBar />
      <GenreMenu genreList={genreList} />
      <FilterControl />
      <GameSection gameList={gameList} />
    </>
  );
}

export default MainSection;
