import orderById from './orderById';

export function filterByGenre(data, filter) {
  const filteredData = data.filter(
    ({ genre }) => genre.toLowerCase() === filter,
  );
  filteredData.sort(orderById);
  return filteredData;
}

export default filterByGenre;
