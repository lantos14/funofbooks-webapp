export function getData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(response => response.data)
    .catch((error) => {
      throw error;
    });
}
