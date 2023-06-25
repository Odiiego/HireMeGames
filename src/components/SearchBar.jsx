import React from 'react';
import './SearchBar.scss';
import filterByTitle from '../utils/filterByTitle';
import GameListContext from '../context/GameListContext';

const SearchBar = () => {
  const { data, setFilteredData } = React.useContext(GameListContext);
  const searchValue = React.useRef(null);

  function handleFilter() {
    const filter = String(searchValue.current.value);
    const active = document.querySelector(
      '.navbar__btn__container__btn--active',
    );
    if (active) active.className = 'navbar__btn__container__btn';
    if (filter === '') {
      setFilteredData(data);
    } else {
      setFilteredData(filterByTitle(data, filter));
    }
  }

  return (
    <input
      onKeyUp={handleFilter}
      placeholder="Search by Title..."
      ref={searchValue}
      type="text"
      name="search-bar"
      id="searchBar"
      className="search-bar"
    />
  );
};

export default SearchBar;
