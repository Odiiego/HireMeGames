import React from 'react';

import './GenreMenu.scss';
import GameListContext from '../context/GameListContext';
import useGameList from '../hooks/useGameList';
import createGenreList from '../utils/createGenreList';

function GenreMenu() {
  return (
    <nav className="navbar">
      <p className="navbar__tag">Filter By Genre</p>
      <div className="navbar__btn__container">
        {genreList.map((genre) => {
          return (
            <button className="navbar__btn__container__btn" key={genre}>
              {genre}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default GenreMenu;
