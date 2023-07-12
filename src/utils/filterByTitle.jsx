export function filterByTitle(data, filter) {
  const filteredData = data.filter(({ title }) =>
    title.toLowerCase().includes(filter.toLowerCase()),
  );
  return filteredData;
}

export default filterByTitle;
