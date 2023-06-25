import orderById from './orderById';

export function filterByTitle(data, filter) {
  const filteredData = data.filter(({ title }) =>
    title.toLowerCase().includes(filter.toLowerCase()),
  );
  filteredData.sort(orderById);
  return filteredData;
}

export default filterByTitle;
