import React from 'react';
import './GameSection.scss';
import GameListContext from '../context/GameListContext';
import Card from './Card';

const GameSection = () => {
  const { data, userBookmarks, userRatings, filteredData, setFilteredData } =
    React.useContext(GameListContext);
  const [filterStatus, setFilterStatus] = React.useState(false);
  const [sortStatus, setSortStatus] = React.useState(false);
  const gameList = filterStatus || sortStatus ? filteredData : data;
  console.log(data);
  console.log(filteredData);

  React.useEffect(() => {
    if (filterStatus) {
      setFilteredData(data.filter((game) => userBookmarks.includes(game.id)));
    }
  }, [userBookmarks]);

  function applyFilter() {
    setFilterStatus(!filterStatus);
    if (filterStatus) {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((game) => userBookmarks.includes(game.id)));
    }
  }

  function applySorting() {
    let sortedGameList = [[], [], [], [], []];
    setSortStatus(!sortStatus);

    gameList.map((game) => {
      if (userRatings[game.id]) {
        sortedGameList[userRatings[game.id]].push(game);
      } else {
        sortedGameList[0].push(game);
      }
    });

    sortedGameList = [
      ...sortedGameList[4],
      ...sortedGameList[3],
      ...sortedGameList[2],
      ...sortedGameList[1],
      ...sortedGameList[0],
    ];

    if (sortStatus) {
      setFilteredData(sortedGameList);
    } else {
      setFilteredData(sortedGameList.reverse());
    }
  }

  return (
    <>
      <button
        onClick={applyFilter}
        className={`favorite${filterStatus ? '--active' : ''}`}
      >
        favoritos
      </button>

      <button
        onClick={applySorting}
        className={`sorted${sortStatus ? '--active' : ''}`}
      >
        Sort By Rating
      </button>

      <section className="main-container">
        {gameList.map((game) => {
          return <Card key={game.id} game={game} />;
        })}
      </section>
    </>
  );
};

export default GameSection;
