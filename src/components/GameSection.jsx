import React from 'react';
import './GameSection.scss';
import GameListContext from '../context/GameListContext';
import Card from './Card';

const GameSection = () => {
  const { data, filteredData } = React.useContext(GameListContext);
  const gameList = filteredData ? filteredData : data;
  return (
    <section className="main-container">
      {gameList.map((game) => {
        return <Card key={game.id} game={game} />;
      })}
    </section>
  );
};

export default GameSection;
