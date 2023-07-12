import React from 'react';
import load from '../assets/load.gif';
import GameListContext from '../context/GameListContext';

import GameList from '../components/GameList';
import Header from '../components/Header';
import Error from '../components/Error';

const Home = () => {
  const { data, error, loading } = React.useContext(GameListContext);

  return (
    <>
      <Header />
      {error && <Error error={error} />}
      {loading && !error ? (
        <img className="loading" src={load} width={'75px'} />
      ) : (
        data && <GameList />
      )}
    </>
  );
};

export default Home;
