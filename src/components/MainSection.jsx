import React from 'react';

import SearchBar from '../components/SearchBar';
import GenreMenu from '../components/GenreMenu';
import FilterControl from '../components/FilterControl';
import GameSection from '../components/GameSection';
import GameListContext from '../context/GameListContext';
import useGameList from '../hooks/useGameList';
import Footer from './Footer';

function MainSection() {
  const { data, userData, filter } = React.useContext(GameListContext);
  const { gameList } = useGameList(data, userData, filter);

  return (
    <>
      <SearchBar />
      <GenreMenu />
      <FilterControl />
      <GameSection gameList={gameList} />
      <Footer />
    </>
  );
}

export default MainSection;
