import React from 'react';

import GameListContext from '../context/GameListContext';
import './GenreMenu.scss';

function GenreMenu() {
  const { filter, setFilter, genreList } = React.useContext(GameListContext);

  function handleClick({ target }) {
    const filterValue =
      target.innerText.toLowerCase() == filter.genre
        ? null
        : target.innerText.toLowerCase();
    setFilter({ ...filter, genre: filterValue });
  }

  return (
    <nav className="navbar">
      <p className="navbar__tag">Filter By Genre</p>
      <div className="navbar__btn__container">
        {genreList &&
          genreList.map((genre) => {
            return (
              <button
                onClick={handleClick}
                className={`navbar__btn__container__btn${
                  genre == filter.genre ? '--active' : ''
                }`}
                key={genre}
              >
                {genre}
              </button>
            );
          })}
      </div>
    </nav>
  );
}

export default GenreMenu;
