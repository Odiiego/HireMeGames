import React from 'react';

import './GameSection.scss';
import GameCard from './GameCard';

function GameSection({ gameList }) {
  if (gameList.length == 0) {
    return (
      <h2 className="error-message game-section__error">
        No games on the list match your search.
      </h2>
    );
  }
  return (
    <section className="game-section">
      <div className="game-section__container">
        {gameList.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </div>
    </section>
  );
}

export default GameSection;
