import React from 'react';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Error from '../components/Error';
import GameListContext from '../context/GameListContext';
import Loader from '../components/Loader';

const Home = () => {
  const { data, error, loading, userData } = React.useContext(GameListContext);

  return (
    <>
      {loading && <Loader />}
      {(data || error) && <Header />}
      {data && <MainSection props={(data, userData)} />}
      {error && <Error />}
    </>
  );
};

export default Home;
