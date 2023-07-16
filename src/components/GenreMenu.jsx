import React from 'react';

import './GenreMenu.scss';

function GenreMenu({ genreList }) {
  return (
    <nav className="navbar">
      <p className="navbar__tag">Filter By Genre</p>
      <div className="navbar__btn__container">
        {genreList &&
          genreList.map((genre) => {
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
