import React from 'react';
import './GameSection.scss';

function GameSection({ gameList }) {
  return (
    <section className="game-section">
      {gameList.map((game) => {
        return <h1 key={game.id}>{game.title}</h1>;
      })}
    </section>
  );
}

export default GameSection;
