export function getData(url) {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": process.env.FOB_SERVER_TOKEN,
    }
  })
    .then(response => response.json())
    .then(response => response.data)
    .catch((error) => {
      throw error;
    });
}
