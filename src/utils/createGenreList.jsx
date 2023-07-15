function createGenreList(gameList) {
  let genreList = new Set();
  gameList.map(({ genre }) => genreList.add(genre));
  genreList = [...genreList];
  return genreList;
}

export default createGenreList;
