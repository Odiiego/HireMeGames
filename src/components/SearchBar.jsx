import React from 'react';
import './SearchBar.scss';
import GameListContext from '../context/GameListContext';

const SearchBar = () => {
  const { data } = React.useContext(GameListContext);
  const searchValue = React.useRef(null);

  return (
    <div className="search-container">
      <input
        placeholder="Search by Title..."
        ref={searchValue}
        type="text"
        name="search-bar"
        id="searchBar"
        className="search-bar"
      />
      <button className="search-bar__btn">Search</button>
    </div>
  );
};

export default SearchBar;
