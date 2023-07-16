import React from 'react';
import './SearchBar.scss';
import GameListContext from '../context/GameListContext';

const SearchBar = () => {
  const { filter, setFilter } = React.useContext(GameListContext);
  const searchValue = React.useRef(null);

  function handleEvent() {
    setFilter({ ...filter, title: searchValue.current.value });
  }

  return (
    <div className="search-container">
      <input
        onKeyUp={handleEvent}
        placeholder="Search by Title..."
        ref={searchValue}
        type="text"
        name="search-bar"
        id="searchBar"
        className="search-bar"
      />
      <button onClick={handleEvent} className="search-bar__btn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
