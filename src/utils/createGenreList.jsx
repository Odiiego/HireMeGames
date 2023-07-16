function createGenreList(gameList) {
  let genreList = new Set();
  gameList.map(({ genre }) => genreList.add(genre.toLowerCase()));
  genreList = [...genreList];
  return genreList;
}

export default createGenreList;
