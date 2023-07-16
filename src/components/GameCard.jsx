import React from 'react';

import './GameCard.scss';
import Preferences from './Preferences';

function GameCard({ game }) {
  const [detailsStatus, setDetailStatus] = React.useState(true);

  function handleClick() {
    return setDetailStatus(!detailsStatus);
  }

  return (
    <article className="card">
      <section
        className={`card__front-section${detailsStatus ? '--visible' : ''}`}
      >
        <a className="card__front-link" href={game.game_url}>
          <img
            className="card__front-img"
            src={game.thumbnail}
            alt={`${game.title} image`}
            loading="lazy"
          />
        </a>
        <div className="card__front">
          <h2 className="card__front-title">{game.title}</h2>
          <span className="preferences-container">
            <Preferences
              game={game}
              id={game.id}
              bookmarked={game.bookmarked}
              rating={game.rating}
            />
            <p className="card__front-genre">{game.genre}</p>
          </span>
          <p className="card__front-description">{game.short_description}</p>
          <a onClick={handleClick} className="card__front-details">
            More Details
          </a>
        </div>
      </section>
      <section
        className={`card__back-section${!detailsStatus ? '--visible' : ''}`}
      >
        <h2 className="card__back-title">{game.title}</h2>
        <span className="preferences-container">
          <Preferences
            game={game}
            id={game.id}
            bookmarked={game.bookmarked}
            rating={game.rating}
          />
          <p className="card__back-genre">{game.genre}</p>
        </span>
        <p className="card__back-description">{game.short_description}</p>
        <p className="card__back-developer">
          <b>Developer:</b> {game.developer}
        </p>
        <p className="card__back-publisher">
          <b>Publisher:</b> {game.publisher}
        </p>
        <p className="card__back-release">
          <b>Release Date:</b> {game.release_date}
        </p>
        <a onClick={handleClick} className="card__back-details">
          Less Details
        </a>
      </section>
    </article>
  );
}

export default GameCard;
