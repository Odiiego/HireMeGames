import React from 'react';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import GameListContext from '../context/GameListContext';

const Home = () => {
  const { data, userData } = React.useContext(GameListContext);

  return (
    <>
      <Header />
      {data && <MainSection props={(data, userData)} />}
    </>
  );
};

export default Home;
