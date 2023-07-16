import React from 'react';

import './FilterControl.scss';
import GameListContext from '../context/GameListContext';
import useGameList from '../hooks/useGameList';

function FilterControl({}) {
  const { data, userData } = React.useContext(GameListContext);
  const {
    toggleFilterBookmarkedStatus,
    toggleSortByRating,
    toggleSortingDirection,
  } = useGameList(data, userData);
  return (
    <div className="filter-control-container">
      <nav className="filter-control">
        <button
          onClick={toggleFilterBookmarkedStatus}
          className="filter-control__btn--favorites"
        >
          {' '}
          Filter Favorites
        </button>
        <div className="filter-control__btn-container">
          <button
            onClick={toggleSortByRating}
            className="filter-control__btn--ratings"
          >
            Sort by Ratings
          </button>
          <button
            onClick={toggleSortingDirection}
            className="filter-control__btn--ratings-direction"
          >
            ↑
          </button>
        </div>
      </nav>
    </div>
  );
}

export default FilterControl;
