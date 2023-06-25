import React from 'react';
import './GenreMenu.scss';
import filterByGenre from '../utils/filterByGenre';
import GameListContext from '../context/GameListContext';

const GenreMenu = () => {
  const { data, setFilteredData } = React.useContext(GameListContext);
  const [activeFilter, setActiveFilter] = React.useState(null);

  let genreList = new Set();
  data.map(({ genre }) => genreList.add(genre));
  genreList = [...genreList];

  function handleClick(e) {
    const active = document.querySelector(
      '.navbar__btn__container__btn--active',
    );
    if (active) active.className = 'navbar__btn__container__btn';
    const searchBar = document.getElementById('searchBar');
    searchBar.value = '';

    const filter = e.target.innerText.toLowerCase();

    if (activeFilter === filter) {
      setActiveFilter(null);
      return setFilteredData(data);
    }

    e.target.className += '--active';
    setFilteredData(filterByGenre(data, filter));
    setActiveFilter(filter);
  }

  return (
    <nav className="navbar">
      <p className="navbar__tag">Filter By Genre</p>
      <div className="navbar__btn__container">
        {genreList.map((genre) => {
          return (
            <button
              className="navbar__btn__container__btn"
              key={genre}
              onClick={handleClick}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default GenreMenu;
