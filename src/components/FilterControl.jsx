import React from 'react';
import './FilterControl.scss';

function FilterControl({
  toggleFilterBookmarkedStatus,
  toggleSortingDirection,
  toggleSortByRating,
}) {
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
