import React, { useEffect } from 'react';
import Stars from './Stars';
import Bookmark from './Bookmark';
import GameListContext from '../context/GameListContext';
import './Card.scss';

const Card = ({ game }) => {
  const { dataStatus } = React.useContext(GameListContext);
  const modal = React.useRef(null);

  return (
    <article className="card">
      {dataStatus && <Stars id={game.id} />}
      {dataStatus && <Bookmark id={game.id} />}
      <h2 className="card__title">{game.title}</h2>
      <img
        className="card__img"
        src={`${game.thumbnail}`}
        alt={`${game.title}-thumbnail`}
        loading="lazy"
      />
      <button onClick={() => modal.current.showModal()} className="card__btn">
        Details
      </button>
      <dialog className="card__dialog" ref={modal}>
        <img
          className="card__dialog__thumbnail"
          src={game.thumbnail}
          alt={`${game.title}-thumbnail`}
        />
        <h1 className="card__dialog__title">
          <a target="_blank" href={game.game_url}>
            {game.title}
          </a>
        </h1>
        <p className="card__dialog__description">{game.short_description}</p>
        <p className="card__dialog__developer">
          Developer: <span>{game.developer}</span>
        </p>
        <p>
          Publisher: <span>{game.publisher}</span>
        </p>
        <p>
          Release Date: <span>{game.release_date}</span>
        </p>

        <button className="card__btn" onClick={() => modal.current.close()}>
          Close Details
        </button>
      </dialog>
    </article>
  );
};

export default Card;
