export function filterByGenre(data, filter) {
  const filteredData = data.filter(
    ({ genre }) => genre.toLowerCase() === filter,
  );
  return filteredData;
}

export default filterByGenre;
