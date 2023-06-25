import React from 'react';
import './App.scss';
import GameListContext from './context/GameListContext';
import useFetch from './hooks/useFetch';
import Home from './layout/Home';

function App() {
  const { data, error, loading, request } = useFetch();
  const [filteredData, setFilteredData] = React.useState(data);

  React.useEffect(() => {
    request('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'dev-email-address': 'odiegopaula@gmail.com',
      },
    });
  }, []);

  return (
    <GameListContext.Provider
      value={{
        data,
        error,
        loading,
        filteredData,
        setFilteredData,
      }}
    >
      <Home />
    </GameListContext.Provider>
  );
}

export default App;
