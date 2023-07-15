import React from 'react';

import useUpdateFirebase from './useUpdateFirebase';

function useGameList(
  games,
  preferences = { ratings: null, bookmarks: null },
  filterGameList = { genre: null, title: null },
) {
  const [sortByRating, setSortByRating] = React.useState(false);
  const [sortingDirection, setSortingDirection] = React.useState(true);
  const [filterBookmarkedStatus, setFilterBookmarkedStatus] =
    React.useState(false);

  const { ratings, bookmarks } = preferences;
  const { genre, title } = filterGameList;
  let gameList = games.sort((a, b) => a.id - b.id);
  let errorMessage = null;

  function toggleSortingDirection({ target }) {
    target.className += sortingDirection
      ? '--active'
      : target.className.replace('--active', '');
    setSortingDirection(!sortingDirection);
    return sortingDirection;
  }

  function toggleFilterBookmarkedStatus({ target }) {
    target.className += filterBookmarkedStatus
      ? '--active'
      : target.className.replace('--active', '');

    setFilterBookmarkedStatus(!filterBookmarkedStatus);
    return filterBookmarkedStatus;
  }

  function toggleSortByRating({ target }) {
    target.className += sortByRating
      ? '--active'
      : target.className.replace('--active', '');

    setSortByRating(!sortByRating);
    return sortByRating;
  }

  // unificar os dados da API com os dados da Firestore:
  gameList = gameList.map((game) => {
    game =
      ratings && ratings[game.id]
        ? { ...game, rating: ratings[game.id] }
        : { ...game, rating: 0 };
    game =
      bookmarks && bookmarks.includes(game.id)
        ? { ...game, bookmarked: true }
        : { ...game, bookmarked: false };
    return game;
  });

  // organizar gameListay por Rating:
  if (sortByRating) {
    gameList = sortingDirection
      ? gameList.sort((a, b) => b.rating - a.rating)
      : gameList.sort((a, b) => a.rating - b.rating);
  }

  // filtrar favoritos:
  if (bookmarks && filterBookmarkedStatus) {
    gameList = gameList.filter(({ bookmarked }) => bookmarked);
  }

  // filtrar por gênero ou titulo:
  if (genre) {
    gameList = gameList.filter((game) => game.genre == genre);
  }

  // filtrar por titulo:
  if (title) {
    gameList = gameList.filter((game) => game.title.includes(title));
  }

  // apresentar uma mensagem caso a lista esteja vazia:
  if (gameList.length == 0) {
    errorMessage = `No game on the ${
      filterBookmarkedStatus ? 'favorites list' : 'list'
    } has the ${filter} "${filterValue}"`;
  }

  return {
    gameList,
    toggleFilterBookmarkedStatus,
    toggleSortingDirection,
    toggleSortByRating,
  };
}

export default useGameList;
